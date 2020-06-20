function teacher_message (data,callback) {
    var mysql      = require('mysql');
    var connection = mysql.createConnection({
        host     : '39.101.177.156',
        user     : 'root',
        password : '555500',
        database : 'studentsclass'
    });
    connection.connect();
    var  sql = 'SELECT * FROM teacher WHERE TID='+data.username;
    console.log(sql)
//查
    connection.query(sql,function (err, result) {
        if (err) throw err;
        connection.end();
        console.log(result);
            console.log(result[0].Tname);
        callback(result);

    });

}
exports.teacher_message = teacher_message;

function addT(data,callback){
    var mysql  = require('mysql');
var connection = mysql.createConnection({
    host     : '39.101.177.156',
    user     : 'root',
    password : '555500',
    database : 'studentsclass'
});
connection.connect();


var  addSql = 'INSERT INTO teacher(Tid,Tname,Tpassword,Tsex,Introduction) VALUES(?,?,?,?,?)';
// var  addSqlParams = ['8888','王老师', "123456",'男', 'CN'];
var addSqlParams = [data.tnumber,data.tname,data.tpwd,data.tsex,data.tintroduction];


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
exports.addT = addT;

function getTeachercourse(data,callback) {
    var mysql      = require('mysql');
    var connection = mysql.createConnection({
        host     : '39.101.177.156',
        user     : 'root',
        password : '555500',
        database : 'studentsclass'
    });
    connection.connect();
    var  sql = 'SELECT * FROM course WHERE Cteacher='+data.username;
//查
    connection.query(sql,function (err, result) {
        if (err) throw err;
        connection.end();
        callback(result);

    });
}
exports.getTeachercourse = getTeachercourse;

//打印教师
function getTeacher(callback) {
    var mysql      = require('mysql');
    var connection = mysql.createConnection({
        host     : '39.101.177.156',
        user     : 'root',
        password : '555500',
        database : 'studentsclass'
    });
    connection.connect();
    var  sql = 'SELECT * FROM teacher';
//查
    connection.query(sql,function (err, result) {
        if (err) throw err;
        connection.end();
        callback(result);

    });

}
exports.getTeacher=getTeacher;//管理员--教师信息

//老师修改个人信息
function update_info(data,callback) {
    var mysql      = require('mysql');
    var connection = mysql.createConnection({
        host     : '39.101.177.156',
        user     : 'root',
        password : '555500',
        database : 'studentsclass'
    });
    connection.connect();
    var updataSql = 'UPDATE teacher SET Tname = ?,Tsex = ?,Introduction = ? WHERE Tid = ?';
    var updataSqlParams = [data.teaname,data.teasex,data.introduction,data.tid];
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
exports.update_info = update_info;  // 导出

//老师更改密码
function update_pwd(data,callback) {
    var mysql      = require('mysql');
    var connection = mysql.createConnection({
        host     : '39.101.177.156',
        user     : 'root',
        password : '555500',
        database : 'studentsclass'
    });
    connection.connect();
    var updataSql = 'UPDATE teacher SET Tpassword = ? WHERE Tid = ?';
    var updataSqlParams = [data.teapwd,data.tid];

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
//管理员删除教师信息
function deletetea(data,callback) {
    var mysql      = require('mysql');
    var connection = mysql.createConnection({
        host     : '39.101.177.156',
        user     : 'root',
        password : '555500',
        database : 'studentsclass'
    });
    connection.connect();
    var deleteteaSql = 'DELETE FROM teacher WHERE Tid=?';
    var deleteteaSqlParams = [data.Tid];
    connection.query(deleteteaSql,deleteteaSqlParams,function (err, result) {
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
exports.deletetea=deletetea;

//老师更改课程
function update_course(data,callback) {
    var mysql      = require('mysql');
    var connection = mysql.createConnection({
        host     : '39.101.177.156',
        user     : 'root',
        password : '555500',
        database : 'studentsclass'
    });
    connection.connect();
    var updataSql = 'UPDATE course SET Cname = ?,Ctype = ?,Cweek = ?,Ctime = ?,Cintroduction = ? WHERE Cid = ? and Cteacher = ?';
    var updataSqlParams = [data.Cname,data.Ctype,data.Cweek,data.Ctime,data.Cintroduction,data.Cid,data.username];

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
exports.update_course = update_course;

