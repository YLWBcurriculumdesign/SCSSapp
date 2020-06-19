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
        console.log(result[0].StudentName);
        callback(result);

    });

}
exports.teacher_message = teacher_message;
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