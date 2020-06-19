let tdb = require("../models/tdb");
let cdb = require("../models/cdb");
exports.teacher_message = (req,res)=>{

    tdb.teacher_message(req.body,function(info){
        res.send(info)
    });
}
exports.teacher_mycourse=(req,res)=>{
    tdb.getTeachercourse(req.body,function(arr){
        res.send(arr)
    })
};
