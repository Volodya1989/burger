const express = require("express");

const router = express.Router();

// Import the model (cat.js) to use its database functions.
const burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", (_, res) => {
    burger.selectAll((data)=> {
        const {burger_name } =data;
      const hbsObject = {
        burgers: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });


// app.post('/burger', (req) => {
//     // const { name } = req.body;
//     // const burger = orm.insertOne({ name });
// res.redirect("/");
//     // resp.send(burger);
// });

// app.put('/burger/:id', (req) => {
//     // update new row in the table
//     // const burger = orm.updateOne({ name });
//     // resp.send(burger);
// });

  // Export routes for server.js to use.
module.exports = router;