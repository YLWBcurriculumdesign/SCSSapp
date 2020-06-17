let db = require("../models/db");
exports.dologin = (req,res)=>{



    db.LOGIN(req.body,function(info){
        if (info == 1){
            var user ={
                username:req.body.username,
                password:req.body.password
            };
            var  username = req.body.username
            req.session.user = user;
            console.log(req.session)
            res.send({
                code: '10010',
                message: '登陆成功',
                session:user
            });
        }else {
            req.session.error = "用户名或密码不正确";
            res.send({
                code: '10000',
                message: '密码错误',
            });
        }
    });
}