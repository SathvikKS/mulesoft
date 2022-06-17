const expres = require('express')
const router = expres.Router()
const {
    mysql,
    connection
} = require('../db/config')
router.get('/getMovies', async (req, res) => {
    if (Object.keys(req.body).length === 0 && req.query.actor == undefined) {
        var sql = "SELECT * FROM Movies"
        connection.query(sql, (err, result, fields) => {
            if (err) throw err
            res.status(200).send(result)
        })
    } else {
        var actor = req.body.actor || req.query.actor
        var sql = "SELECT * FROM Movies WHERE lower(actor) like '%"+actor+"%'"
        connection.query(sql, (err, result, fields) => {
            if (err) throw err
            res.status(200).send(result)
        })
    }
})


module.exports = router