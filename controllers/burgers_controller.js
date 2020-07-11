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

  //route to post burger!!!!!!
router.post("/api/burgers", function(req, res) {
    burger.insertOne(["burger_name"], [req.body.burger_name], function(result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
    console.log(req.body)
  });

  router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    burger.updateOne(
      {
        devoured: true
      },
      condition,
      function(result) {
        if (result.changedRows === 0) {
          // If no rows were changed, then the ID must not exist, so 404
          return res.status(404).end();
        }
        res.status(200).end();
  
      }
    );
  });

// app.put('/burger/:id', (req) => {
//     // update new row in the table
//     // const burger = orm.updateOne({ name });
//     // resp.send(burger);
// });

  // Export routes for server.js to use.
module.exports = router;