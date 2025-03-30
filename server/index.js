import express from 'express'
import dbConnection from './dbConnection.js'
import cors from 'cors'
import bodyParser from 'body-parser'
import dotenv from 'dotenv';
import ShortUrl from './routes/ShortUrl.js'
import User from './routes/User.js'
import cookieParser from 'cookie-parser'
import {verification,logout} from './authentication/auth.js';

const app = express()
dotenv.config()

dbConnection()

app.use(cors({
    origin: ['http://localhost:5173',process.env.FRONTEND_URL],
    methods: ['GET','POST'],
    credentials: true
}))

app.use(cookieParser())
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/api',verification)
app.get('/api/logout',logout)

app.use('/',(req,res)=>{
    res.send('API is working')
})

app.use('/api/ShortUrl',ShortUrl)
app.use('/api/User',User)

const port = process.env.PORT || 8100;

app.listen(port,()=>{
    console.log('server started at port',port)
})