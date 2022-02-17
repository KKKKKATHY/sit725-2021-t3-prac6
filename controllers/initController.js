const Service = require("../services")

const initPage = (res) => {
    Service.KathyServices.initContent(res)
}

module.exports = {initPage}