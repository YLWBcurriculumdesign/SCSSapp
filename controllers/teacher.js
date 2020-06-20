let tdb = require("../models/tdb");
let cdb = require("../models/cdb");
exports.teacher_message = (req,res)=>{

    tdb.teacher_message(req.body,function(info){
        res.send(info)
    });
}
exports.teacher_mycourse=(req,res)=>{
    tdb.getTeachercourse(req.body,function(arr){
        res.send(arr)
    })
};
exports.T_update_info = (req,res)=>{
    tdb.update_info(req.body,function (info) {
        res.send(info)
    })
};
exports.T_update_pwd = (req,res)=>{
    tdb.update_pwd(req.body,function (info) {
        res.send(info);
    })
};
//教师删除课程
exports.deletecourse=(req,res)=>{
    tdb.deletecourse(req.body,function(info) {
        res.send(info);
    })
};
