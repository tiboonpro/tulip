import express from "express";
import cors from 'cors'
import bodyParser from 'body-parser'
import * as dotenv from 'dotenv' 
import db from "./Config/Connection.js";

//console.log("line 9")
dotenv.config()
var app = express()

var port = process.env.PORT || 5000

console.log(port)
db.connect((err) => {
    if (err) console.log("Connection Error : ", err)
    else console.log('Database Connected')
})


