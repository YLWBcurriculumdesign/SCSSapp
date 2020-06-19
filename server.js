var express = require("express")
let app = express();
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
let teacher = require("./controllers/teacher")
let admin = require("./controllers/admin")
app.post("/index",index.dologin);
app.post("/student_message",student.student_message);
app.get("/Student_select_course",student.Student_select_course);
app.post("/choosecourse",student.choosecourse);
app.post("/myclass",student.myclass);
app.post("/Teacher",teacher.teacher_message);
app.post("/addS",admin.addS);
app.post("/addC",admin.addC);
app.post("/addT",admin.addT);
app.post("/Teacher_my_course",teacher.teacher_mycourse);
app.post("/S_update_info",student.S_update_info);
app.get("/Admin_teacher",admin.admin_teacher);
app.get("/Admin_student",admin.admin_student);
app.get('/logout', function(req, res){
    req.session.user = null;
    req.session.error = null;
    res.redirect('/');
});
app.listen(3030,()=>{
    console.log("服务器启动了~")
});