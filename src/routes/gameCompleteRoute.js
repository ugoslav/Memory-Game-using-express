const express = require("express");
const router = express.Router();

router
    .route("/")
    .get((req,res) => {
        res.render("partials/gameComplete", {title : "...irl"});
    });

module.exports = router;