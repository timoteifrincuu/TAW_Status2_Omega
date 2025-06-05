//asta e EXPRESS

import express from "express"
import bodyParser from "body-parser"

const api = express()
const port = 3000

api.use(bodyParser.json())
api.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE")
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type")
  res.setHeader("Access-Control-Allow-Credentials", true)
  next()
})

const appointments = []

api.get('/appointments', (req, res) => {
  res.send(appointments)
})

api.post('/appointments', (req, res) => {
  const appointment = req.body
  appointments.push(appointment)
  res.status(201).send({ message: "Appointment added", appointment })
})

api.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
