function getCourse(callback) {
    var mysql      = require('mysql');
    var connection = mysql.createConnection({
        host     : '39.101.177.156',
        user     : 'root',
        password : '555500',
        database : 'studentsclass'
    });
    connection.connect();
    var  sql = 'select * from course,teacher where  course.Cteacher=teacher.Tid';
//查
    connection.query(sql,function (err, result) {
        if (err) throw err;
        connection.end();
        callback(result);

    });

}
exports.getCourse=getCourse;

function addC(data,callback){
    var mysql  = require('mysql');
    var connection = mysql.createConnection({
        host     : '39.101.177.156',
        user     : 'root',
        password : '555500',
        database : 'studentsclass'
    });
    connection.connect();
    
    
    var  addSql = 'INSERT INTO course(Cid,Cname,Ctype,Cweek,Ctime,Cintroduction,Cteacher) VALUES(?,?,?,?,?,?,?)';
    // var  addSqlParams = ['8888','王老师', "123456",'男', 'CN'];
    var addSqlParams = [data.cnumber,data.cname,data.ctype,data.cweek,data.ctime,data.cintroduction,data.cteacher];
    
    
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
                }else if(substr == "ER_NO_REFERE" ){
                    var err = err.message;
                    callback("-3");
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

exports.addC = addC;

function getCourse(callback) {
    var mysql      = require('mysql');
    var connection = mysql.createConnection({
        host     : '39.101.177.156',
        user     : 'root',
        password : '555500',
        database : 'studentsclass'
    });
    connection.connect();
    var  sql = 'select * from course,teacher where  course.Cteacher=teacher.Tid';
//查
    connection.query(sql,function (err, result) {
        if (err) throw err;
        connection.end();
        callback(result);

    });

}
exports.getCourse=getCourse;//管理员--学生信息
//管理员查询全部课程信息
function getcourses(callback) {
    var mysql      = require('mysql');
    var connection = mysql.createConnection({
        host     : '39.101.177.156',
        user     : 'root',
        password : '555500',
        database : 'studentsclass'
    });
    connection.connect();
    var  sql = 'SELECT * FROM course';
//查
    connection.query(sql,function (err, result) {
        if (err) throw err;
        connection.end();
        callback(result);
    });
}
exports.getcourses=getcourses;
//管理员\学生删除课程信息
function deletecourse(data,callback) {
    var mysql      = require('mysql');
    var connection = mysql.createConnection({
        host     : '39.101.177.156',
        user     : 'root',
        password : '555500',
        database : 'studentsclass'
    });
    connection.connect();
    var deletecourseSql = 'DELETE FROM course WHERE Cid=?';
    var deletecourseSqlParams = [data.Cid];
    connection.query(deletecourseSql,deletecourseSqlParams,function (err, result) {
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
exports.deletecourse=deletecourse;
