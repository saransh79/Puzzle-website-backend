import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import authRoute from './routes/auth.js'
import adminRoute from './routes/admin.js'
import problemRoute from './routes/problem.js'
import userRoute from './routes/user.js'
const app= express();

app.use(express.urlencoded({extended: true}))
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())
app.use(express.json())

app.use('/auth', authRoute)
app.use('/admin', adminRoute)
app.use('/quiz', problemRoute)
app.use('/user',userRoute)
export default app;