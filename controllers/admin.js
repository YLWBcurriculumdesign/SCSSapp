let sdb = require("../models/sdb");
let cdb = require("../models/cdb");
let tdb = require("../models/tdb");

exports.addS = (req,res)=>{
    sdb.addS(req.body,function(info){
        res.send(info)
    })
};

exports.addC = (req,res)=>{
    cdb.addC(req.body,function(info){
        res.send(info)
    })
};

exports.addT = (req,res)=>{
    tdb.addT(req.body,function(info){
        res.send(info)
    })
};