const orm = require("../config/orm.js");
const burgers = {
    selectAll: (cb) =>{
        orm.selectAll("burgers",(res)=>{
            cb(res)
        });
    } 
}

// Export the database functions for the controller (burgers_controller.js).
module.exports = burgers;