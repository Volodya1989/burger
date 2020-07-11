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


////route to post burger!!!!!!
// router.post("/api/burger", function(req, res) {
//     burger.insertOne(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], function(result) {
//       // Send back the ID of the new quote
//       res.json({ id: result.insertId });
//     });
//   });

////   EXAMPLE OF INSERT 
// router.post("/api/cat", function(req, res) {
//     cat.create(["name", "sleepy"], [req.body.name, req.body.sleepy], function(result) {
//       // Send back the ID of the new quote
//       res.json({ id: result.insertId });
//     });
//   });

// app.put('/burger/:id', (req) => {
//     // update new row in the table
//     // const burger = orm.updateOne({ name });
//     // resp.send(burger);
// });

  // Export routes for server.js to use.
module.exports = router;