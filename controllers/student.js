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
exports.choosecourse=(req,res)=>{
    sdb.choosecourse(req.body,function(info) {
        res.send(info);
    })
    // res.redirect("/update");
};
exports.myclass = (req,res)=>{

    sdb.getStudentcourse(req.body,function(info){
        res.send(info)
    })
};