const client = require("../dbConnection")
let collection = null

setTimeout(function() {
    collection = client.mongoClient.db("project-kathy").collection("page-content")
}, 2000);

const initContent = function(res) {
    collection.find().toArray(function(err, result) {
        if(err) {
            throw err
        }
        res.send({result, statusCode: 200})
    })
}

module.exports = {
    initContent
}