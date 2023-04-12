const mysql = require('mysql')
const { promisify } = require('es6-promisify')
require('dotenv').config()




const conn = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
})

const query = promisify(conn.query).bind(conn)






exports.getHome = async (req, res) => {
    try {
        console.log('RENDERING HOME PAGE (CONTROLLER)')
        const tracks = await query(`SELECT * FROM tracks ORDER BY name`)
        res.render('home', { tracks })

    } catch (err) {
        res.status(err.status || 500).send(err.message || 'Unexpected Error')

    } 
}


exports.getTrackList = async(req, res) => {
    try {
        const tracks = await query(`SELECT * FROM tracks`)


        res.render('tracks', { tracks })

    } catch (err) {
        res.status(err.status || 500).send(err.message || 'Unexpected Error')

    } 
}



exports.getCompList = async(req, res) => {
    try {
        const comps = await query(`SELECT * FROM competition ORDER BY competition.date`)
        res.render('comps', { comps })
    } catch(err) {
        res.status(err.status || 500).send(err.message || 'Unexpected Error')

    }
}


