export default (bot, tg) => {
  bot.command('test', (ctx) => {
    ctx.reply('Бот работает')
  })
}
