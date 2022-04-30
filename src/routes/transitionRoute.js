const express = require("express");
const router = express.Router();

router
    .route("/")
    .get((req,res) => {
        res.render("partials/transition", {title : "Get Ready"});
    });

module.exports = router;