import { Telegram, Telegraf } from 'telegraf'
import { botToken } from '../config/index.js'
import test from './test.js'

const bot = new Telegraf(botToken)
const tg = new Telegram(botToken)

export default () => {
  test(bot, tg)
}

bot.launch()
// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
