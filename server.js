var express = require("express")
let app = express();
var bodyParser = require('body-parser'); //解析post过来的数据
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.use(function(req,res,next){
    res.header('Access-Control-Allow-Origin','*');//跨域访问
    next();
});

var session = require("express-session");
app.use(session({
    secret:'secret',
    resave:true,
    saveUninitialized:false,

}));
app.use(function(req, res, next){
    res.locals.user = req.session.user;
    var err = req.session.error;
    res.locals.message = '';
    if (err) res.locals.message = '<div style="margin-bottom: 20px;color:red;">' + err + '</div>';
    next();
});


app.listen(3000,()=>{
    console.log("服务器启动了~")
});