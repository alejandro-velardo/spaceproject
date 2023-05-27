import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import morgan from 'morgan'

dotenv.config()

// Mounting app
const app = express()

// Middleware 
app.use(express.json())
app.use(cors())

const env = process.env.NODE_ENV || 'development'
if (env === 'development') {
    app.use(morgan((tokens, req, res) => {
        return `${req.method} ${req.url} ${res.statusCode} - ${tokens['response-time'](req, res)} ms`;
    }))
}

// Base endpoint
app.get("/", (req, res) => {
    res.send("SpaceProject API")
})


// Montando la app en el servidor (utilizando la variable de entorno, "process.env")
const port = process.env.PORT
app.listen(port, () => {
    console.log(`App listening on port ${port}!`)
})