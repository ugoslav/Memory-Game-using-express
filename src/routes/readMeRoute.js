const express = require("express");

const router = express.Router();

router
    .route("/")
    .get((req,res) => {
        res.render("partials/readMe",{title : "A Little Something"});
    })

module.exports = router;