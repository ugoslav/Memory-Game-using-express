const express = require("express");

const router = express.Router();

router
    .route("/")
    
    .get((req,res) => {
        res.render("partials/startPage", {title : "Are you Ready?"})
    });

module.exports = router;