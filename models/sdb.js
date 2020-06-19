function student_message (data,callback) {
    var mysql      = require('mysql');
    var connection = mysql.createConnection({
        host     : '39.101.177.156',
        user     : 'root',
        password : '555500',
        database : 'studentsclass'
    });
    connection.connect();
    var  sql = 'SELECT * FROM studata where StudentID='+data.username;
    console.log(sql)
//查
    connection.query(sql,function (err, result) {
        if (err) throw err;
        connection.end();
        console.log(result);
        console.log(result[0].StudentName);
        callback(result);

    });

}
exports.student_message = student_message;


function choosecourse(data,callback) {
    var mysql  = require('mysql');
    var connection = mysql.createConnection({
        host     : '39.101.177.156',
        user     : 'root',
        password : '555500',
        database : 'studentsclass'
    });
    connection.connect();


    var  addSql = 'INSERT INTO sac(SID,CID) VALUES(?,?)';
// var  addSqlParams = ['8888','王老师', "123456",'男', 'CN'];
    var addSqlParams = [data.username,data.CID];
//增
    connection.query(addSql,addSqlParams,function (err, result) {
        console.log(addSql);
        if(err){
            var str = err.message;
            console.log(str.substring(0,12));
            var substr = str.substring(0,12);
            if(substr == "ER_DUP_ENTRY" ){
                var err = err.message;
                callback("-2");
                connection.end();
            }else{

                console.log('[INSERT ERROR] - ',err.message);
                callback("-1");
                connection.end();
            }
        }else {
            console.log(result);
            console.log(data);
            connection.end();
            callback("1")
        }
    });

}
exports.choosecourse=choosecourse;

function getStudentcourse (data,callback) {
    var mysql      = require('mysql');
    var connection = mysql.createConnection({
        host     : '39.101.177.156',
        user     : 'root',
        password : '555500',
        database : 'studentsclass'
    });
    connection.connect();
    var  sql = 'SELECT * FROM course,sac WHERE course.Cid=sac.CID and sac.SID='+data.username;
    console.log(sql)
//查
    connection.query(sql,function (err, result) {
        if (err) throw err;
        connection.end();
        console.log(result);
        callback(result);

    });

}
exports.getStudentcourse = getStudentcourse;

//增
function addS(data,callback){
    var mysql      = require('mysql');
    var connection = mysql.createConnection({
        host     : '39.101.177.156',
        user     : 'root',
        password : '555500',
        database : 'studentsclass'
    });
    connection.connect();
    var  addSql = 'INSERT INTO studata(StudentID,StudentName,StudentSex,Studentpwd,StudentAge,college,major) VALUES(?,?,?,?,?,?,?)';
    var addSqlParams = [data.snumber,data.sname,data.ssex,data.spwd,data.sage,data.scollege,data.smajor];

    //增
    connection.query(addSql,addSqlParams,function (err, result) {
        console.log(addSql);
            if(err){
                var str = err.message;
                console.log(str.substring(0,12));
                var substr = str.substring(0,12);
                if(substr == "ER_DUP_ENTRY" ){
                    var err = err.message;
                    callback("-2");
                    connection.end();
                }else{
                    
                    console.log('[INSERT ERROR] - ',err.message);
                    callback("-1");
                    connection.end();
            }
            }else {
                console.log(result);
                console.log(data);
                connection.end();
                callback("1")
            }        
    });

}

exports.addS = addS;

//学生修改个人信息
function update_info(data,callback){
    var mysql      = require('mysql');
    var connection = mysql.createConnection({
        host     : '39.101.177.156',
        user     : 'root',
        password : '555500',
        database : 'studentsclass'
    });
    connection.connect();
    var updataSql = 'UPDATE studata SET StudentName = ?,StudentSex = ?,StudentAge = ?,college = ?,major = ? WHERE StudentID = ?';
    var updataSqlParams = [data.stuname, data.stusex, data.stuage, data.college, data.major, data.stuid];

    //增
    connection.query(updataSql,updataSqlParams,function (err, result) {
        console.log(updataSql);
        if(err){
            var str = err.message;
            console.log(str.substring(0,12));
            var substr = str.substring(0,12);
            if(substr == "ER_DUP_ENTRY" ){
                var err = err.message;
                callback("-2");
                connection.end();
            }else{
                console.log('[INSERT ERROR] - ',err.message);
                callback("-1");
                connection.end();
            }
        }else {
            console.log(result);
            console.log(data);
            connection.end();
            callback("1")
        }
    });

}

exports.update_info = update_info;

function getStudent(callback) {
    var mysql      = require('mysql');
    var connection = mysql.createConnection({
        host     : '39.101.177.156',
        user     : 'root',
        password : '555500',
        database : 'studentsclass'
    });
    connection.connect();
    var  sql = 'SELECT * FROM studata';
//查
    connection.query(sql,function (err, result) {
        if (err) throw err;
        connection.end();
        callback(result);

    });

}

exports.getStudent=getStudent;//管理员--学生信息

//学生修改个人密码
function update_pwd(data,callback) {
    var mysql      = require('mysql');
    var connection = mysql.createConnection({
        host     : '39.101.177.156',
        user     : 'root',
        password : '555500',
        database : 'studentsclass'
    });
    connection.connect();
    var updataSql = 'UPDATE studata SET StudentPWD = ? WHERE StudentID = ?';
    var updataSqlParams = [data.stupwd,data.stuid];

    connection.query(updataSql,updataSqlParams,function (err, result) {
        if(err){
            var str = err.message;
            console.log(str);
            callback("-1");
            connection.end();
        }
        console.log(data);
        callback("1");
        connection.end();
    });
}
exports.update_pwd = update_pwd;