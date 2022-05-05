import { config } from 'dotenv'
config()

const { BOT_TOKEN } = process.env
export const botToken = BOT_TOKEN
