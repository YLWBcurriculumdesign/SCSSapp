let sdb = require("../models/sdb");
let cdb = require("../models/cdb");
let tdb = require("../models/tdb");

exports.addS = (req,res)=>{
    sdb.addS(req.body,function(info){
        res.send(info)
    })
};

exports.addC = (req,res)=>{
    cdb.addC(req.body,function(info){
        res.send(info)
    })
};

exports.addT = (req,res)=>{
    tdb.addT(req.body,function(info){
        res.send(info)
    })
};
exports.admin_teacher =(reg,res)=>{
    tdb.getTeacher(function(info){
        res.send(info)
    });
};

exports.admin_student =(reg,res)=>{
    sdb.getStudent(function(info){
        res.send(info)
    });
};
exports.admin_course =(reg,res)=>{
    cdb.getCourse(function(info){
        res.send(info)
    });
};
//管理员删除学生
exports.admindelstudent =(reg,res)=>{
    sdb.getStudent(function(info){
        res.send(info)
    });
};
exports.deletestudent=(req,res)=>{
    sdb.deletestudent(req.body,function(info) {
        res.send(info);
    })
};
//管理员删除教师
exports.admindeltea =(reg,res)=>{
    tdb.getTeacher(function(info){
        res.send(info)
    });
};
exports.deletetea=(req,res)=>{
    tdb.deletetea(req.body,function(info) {
        res.send(info);
    })
};
//管理员删除课程
exports.admindelcourse =(reg,res)=>{
    cdb.getcourses(function(info){
        res.send(info)
    });
};
exports.deleteCourse=(req,res)=>{
    cdb.deletecourse(req.body,function(info) {
        res.send(info);
    })
};

