let sdb = require("../models/sdb");
let cdb = require("../models/cdb");
exports.student_message = (req,res)=>{

    sdb.student_message(req.body,function(info){
        res.send(info)
    });
}

exports.Student_select_course =(req,res)=>{
   cdb.getCourse(function(arr){
        res.send(arr)
    })
};