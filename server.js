var express = require("express")
let app = express();
var jwt = require('jsonwebtoken');
var session = require("express-session");
app.use(session({
    secret:'secret',
    resave:true,
    saveUninitialized:true,

}));
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(function(req,res,next){
    res.header('Access-Control-Allow-Origin','*');//跨域访问
    next();
});

let index = require("./controllers/index")
app.post("/index",index.dologin);
app.get("/session_name",function (req,res) {
    let token = req.headers.token || req.query.token || req.body.token;
    jwt.verify(token, 'daxunxun', function (err, decoded) {
        if (err) {
            console.log('验证shibai');
        } else {
            req.decoded = decoded;
            console.log('验证成功', decoded);
            next()
        }
    })
    console.log(decoded)
    res.send("hahahh")
})
app.get('/logout', function(req, res){
    req.session.user = null;
    req.session.error = null;
    res.redirect('/');
});
app.listen(3030,()=>{
    console.log("服务器启动了~")
});