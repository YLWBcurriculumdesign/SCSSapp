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

exports.S_update_info = (req,res)=>{
    sdb.update_info(req.body,function(info){
        res.send(info)
    })
};

exports.S_update_pwd = (req,res)=>{
    sdb.update_pwd(req.body,function (info) {
        res.send(info);
    })
};
//学生退选课程
exports.deletecourse=(req,res)=>{
    cdb.deletecourse(req.body,function(info) {
        res.send(info);
    })
};