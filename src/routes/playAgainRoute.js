const express = require("express");
const router = express.Router();

router
    .route("/")
    .get((req,res) => {
        res.render("partials/playAgain", {title : "No\'n to worry about"});
    });

module.exports = router;