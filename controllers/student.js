let sdb = require("../models/sdb");
exports.student_message = (req,res)=>{

    sdb.student_message(req.body,function(info){
        res.send(info)
    });
}