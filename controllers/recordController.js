const Record = require("../models/Record")

exports.createRecord = async (req , res) => {
    try {
        const record = await Record.create(req.body);
        res.json(record);
    } catch (err) {
        res.status(400).json({
            error : err.message
        });
    }
};

exports.getRecords = async (req , res) => {
    try {
        let filter = {}

        if(req.query.type){
            filter.type = req.query.type;
        }

        if(req.query.category){
            filter.category = req.query.category;
        }

        if(req.query.date){
            filter.date = req.query.date;
        }

        // pagination
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 5;
        const skip = (page - 1) * limit;

        const records = await Record.find(filter)
            .sort({ date : -1 })
            .skip(skip)
            .limit(limit);

        const total = await Record.countDocuments(filter);

        res.json({
            page,
            limit,
            total,
            count : records.length,
            data : records
        });

    } catch (err) {
        res.status(400).json({ error : err.message })
    }
};

exports.getSummary = async (req , res) => {
    try {

    const records = await Record.find();
    let income = 0, expense = 0;
    let categoryTotals = {};

    records.forEach(r => {
        // income / expense
        if(r.type === "income") income += r.amount;
        else if (r.type === "expense") expense += r.amount;

         // category-wise total
        if(!categoryTotals[r.category]){
            categoryTotals[r.category] = 0;
        }

        categoryTotals[r.category] += r.amount;
    });  

    // recent activity (last 5 records)
    const recent = await Record.find()
        .sort({ date : -1 })
        .limit(5);

    res.json({
        totalIncome : income,
        totalExpense : expense,
        netBalance : income - expense,
        categoryTotals,
        recentActivity : recent
    });
    
    } catch (err) {
        res.status(400).json({ error : err.message });
    }
};

// UPDATE RECORD (Admin only)
exports.updateRecord = async (req , res) => {
    try {
        delete req.body._id;

        const record = await Record.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new : true }
        );

        if(!record){
            return res.status(404).json( { message : "Record not found"} )
        }

        res.json(record);
    } catch (err) {
        res.status(400).json( { error : err.message });
    }
};

// DELETE Record (Admin only)
exports.deleteRecord = async (req , res) => {
    try {
        const record = await Record.findByIdAndDelete(req.params.id);

        if(!record){
            return res.status(404).json({ message : "Record not found"});
        }

        res.json( { message : "Record deleted successfully" } );
    } catch (err) {
        res.status(400).json({error : err.message});
    }
}