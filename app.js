const express = require("express")
const logger = require ("morgan")
const cors = require("cors")
require("dotenv").config()

const app = express()
const indexRouter = require("./routes/index")
const apiRouter = require("./routes/api")
const {connect} = require("./db/db")

app.use(logger("dev"))
app.use(cors())
app.use(express.json())

app.use( "/", indexRouter )
app.use( "/api", apiRouter )

connect()

module.exports = app