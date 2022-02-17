const express = require("express")
const router = express.Router()

const Controller = require("../controllers")

router.get("/init", function(req, res) {
    Controller.init.initPage(res)
})

module.exports = router