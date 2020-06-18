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
let student = require("./controllers/student")
let index = require("./controllers/index")
app.post("/index",index.dologin);
app.post("/student_message",student.student_message);
app.get("/Student_select_course",student.Student_select_course);
app.get('/logout', function(req, res){
    req.session.user = null;
    req.session.error = null;
    res.redirect('/');
});
app.listen(3030,()=>{
    console.log("服务器启动了~")
});