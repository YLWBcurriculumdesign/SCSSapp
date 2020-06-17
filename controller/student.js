let sdb = require("../models/sdb");
let db = require("../models/db");

//渲染一个处理学生修改个人信息的逻辑
exports.doupdate=(req,res)=>{
    sdb.UPDATE(req.body,function(info) {
        res.send(info);
    })
};

//返回当前学生的信息
exports.showstudata=(req,res) => {
    if (req.session.user) {
        sdb.getStudent(req.session, function (arr) {
            res.send({"arr": arr})
        });
    }
};