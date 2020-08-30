module.exports = {
  debug (obj = {}) {
    return JSON.stringify(obj, null, 4); 
  },
  logStart() {
    console.log('Bot has been started...');
  },
  getChatId(ctx) {
    return ctx.chat.id;
  },
  getName(user) {
    const firstName = user.first_name || '';
    const lastName = user.last_name || '';
    return [firstName, lastName].join(' ');
  }
};