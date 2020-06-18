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