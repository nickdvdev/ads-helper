require('dotenv').config();
const markup = require('telegraf/markup') 
const { Telegraf } = require('telegraf')
console.log('Bot has been started...')
const bot = new Telegraf(process.env.BOT_TOKEN);
//======================================================
bot.start((ctx) => ctx.reply(`Купи у меня рекламу, щщщинок ${ctx.message.from.first_name}`, markup.keyboard([
  ['В топе висеть'],
  ['Рекламный пост']
]).extra()
))
bot.hears('В топе висеть', (ctx) => ctx.reply('Сколько часов я буду ебать твою мамку?', markup.keyboard([
  ['1', '2' ,'3'],
  ['4', '5', '6'],
  ['Назад']
]).extra()))
bot.hears('Рекламный пост', (ctx) => ctx.reply('Тыща рублей в кассу, и пинус в ass'))
bot.hears('1', (ctx) => ctx.reply('Тыща рублей в кассу, и пинус в ass'))
bot.hears('2', (ctx) => ctx.reply('Две тыщи рублей в кассу, и пинус в ass'))
bot.hears('3', (ctx) => ctx.reply('Три тыщи рублей в кассу, и пинус в ass'))
bot.hears('4', (ctx) => ctx.reply('Четыре тыщи рублей в кассу, и пинус в ass'))
bot.hears('5', (ctx) => ctx.reply('Пять тыщь рублей в кассу, и пинус в ass'))
bot.hears('6', (ctx) => ctx.reply('Шесть тыщь рублей в кассу, и пинус в ass'))
bot.hears('Назад', (ctx) => ctx.reply(`Купи у меня рекламу, щщщинок ${ctx.message.from.first_name}`, markup.keyboard([
  ['В топе висеть'],
  ['Рекламный пост']
]).extra()))
//===============================================
bot.help((ctx) => ctx.reply('Запросил помощь'))
bot.on('sticker', (ctx) => ctx.reply('Не хочу стикеры'))
bot.hears('Привет', (ctx) => ctx.reply('Ну привет'))
bot.launch()
