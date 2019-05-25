"use strict";
function test(req,res,next){
    let users = ["John","Marry","Brian"];
    res.json({"users":users});
}
module.exports={test}