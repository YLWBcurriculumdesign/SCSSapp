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
app.post("/S_update_pwd",student.S_update_pwd);
app.post("/T_update_info",teacher.T_update_info)
app.post("/T_update_pwd",teacher.T_update_pwd);
app.get("/Admin_teacher",admin.admin_teacher);
app.get("/Admin_student",admin.admin_student);
app.get("/Admin_course",admin.admin_course);
app.get('/logout', function(req, res){
    req.session.user = null;
    req.session.error = null;
    res.redirect('/');
});
//删除
app.get("/admin_delete_stu",admin.admindelstudent)
app.post("/admin_delete_stu",admin.deletestudent)
app.get("/admin_delete_tea",admin.admindeltea)
app.post("/admin_delete_tea",admin.deletetea)
app.get("/admin_delete_course",admin.admindelcourse)
app.post("/admin_delete_course",admin.deleteCourse)
app.post("/teacher_delete_course",teacher.deletecourse)
app.post("/student_delete_course",student.deletecourse)
app.listen(3030,()=>{
    console.log("服务器启动了~")
});