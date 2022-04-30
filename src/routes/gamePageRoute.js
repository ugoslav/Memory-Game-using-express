const express = require("express");

const router = express.Router();

router
    .route("/")
    .get((req,res) => {
        res.render("partials/gamePage", {title : "You go g..."});
    })

module.exports = router;