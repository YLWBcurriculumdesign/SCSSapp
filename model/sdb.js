//学生修改个人信息
function UPDATE(data,callback) {
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

    connection.query(updataSql,updataSqlParams,function (err, result) {
        if(err){
            var str = err.message;
            callback("-1");
            connection.end();
        }
        console.log(data);
        callback("1");
        connection.end();
    });
}
exports.UPDATE = UPDATE;  // 导出

//当前登录学生信息
function getStudent(session,callback) {
    var mysql      = require('mysql');
    var connection = mysql.createConnection({
        host     : '39.101.177.156',
        user     : 'root',
        password : '555500',
        database : 'studentsclass'
    });
    connection.connect();
    var  sql = 'SELECT * FROM studata where StudentID='+session.user.username;
//查
    connection.query(sql,function (err, result) {
        if (err) throw err;
        connection.end();
        callback(result);

    });

}
exports.getStudent = getStudent;