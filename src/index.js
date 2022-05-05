import 'source-map-support/register'
import express from 'express'
import commands from './commands/index.js'

const { PORT = 3000 } = process.env

const app = express()
commands()

app.get('/', (req, res) => res.send('Works'))

app.listen(PORT, () => console.log(`http://localhost:${PORT}`))
