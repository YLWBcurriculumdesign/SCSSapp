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