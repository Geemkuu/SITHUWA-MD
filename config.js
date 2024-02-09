const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || '254700569709'  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://SithumKalhara:97531@cluster0.iva7dbo.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'Sithumkalhara271@gmail.com'
global.github = 'https://github.com/Geemkuu/SITHUWA-MD'
global.location = 'Sri Lanka'
global.gurl = 'https://instagram.com/gee.mkuu' // add your username
global.sudo = process.env.SUDO || "254700569709"
global.devs = '254700569709';
global.website = 'https://github.com/Geemkuu/SITHUWA-MD' //wa.me/+94000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/15b1dd8aeaa47888d75d7.jpg'
module.exports = {
  sessionName: process.env.SESSION_ID || "SITHUWA-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUtjYTBleWNVOTFFWldkNVp6V24vcWVPb3E2ZjZTK0NDdThzc3FoUVNtOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia25KMldHNG4rdExBQ0QwSkNETTY5MmViU1VFVFNsRG5qZHhyNllOd2NYZz0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlTGFuQkY4emtad2RaNURoSDFWVGxYOXk5aHcvaVprbnFSd3NMN0pOQzFnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4cjVSUFZGUTNSaEZTRUU0REwrMDE1ZmNrMkZmMkYrL3JST1BScW5vZUFNPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRMbGlFdTFIVGhpS3JjbmwvY1BSUVdMaEFJMGx2OWJXMUg3Ukk5OUhVVms9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im5IanFFdHIzUE5aTHFpUGJBM0E5c3VERHpITXhCU3k3QXpHa0FjY0UrM0k9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJMR2tHMUFRT1N5cUZrQ2xQRXM2SmJFWk9uZXRUWWNHTWNZbEJjemxRUzh1NEZxditSTkdWZ2lIYTZ3N05RRGFFOG9peUVEcEpmQmpMcU9IVHNSVUxqUT09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjI0MywiYWR2U2VjcmV0S2V5IjoiTm80ODhnbHpPR0tBZUMwT01nbHdiUGwxaTY0Q0cwTGpkU0pyUkJvSmdLbz0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoidjU4RGFNdkFUNW1ObHkyanI0Yzd2USIsInBob25lSWQiOiI2YTZjODYxNS0zNDJkLTRhYjMtYTNlYy1iNmJkYTk5NDM5NzUiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieU9INVNTZHlBUlFtM2s4UUhwUVV1MkRiVk4wPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5bDE5S3Z2Uml0QzJSNkdvdktwdWQ4Q3A3M0k9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNJU21sS2dCRUpEQW1hNEdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJyL0NrYmxsYzZURnppNUNRblk3R25IUktiVWpMem1WdEY5ZXRwdlp5a2dzPSIsImFjY291bnRTaWduYXR1cmUiOiJGV3dlblExamtDc3hvVlhZaWpkLzBUUWcxLzlRVlVxdm85bUU5TE04c2tjV2E0WVRObi9MZ3RVUFR0U0swVzRSaTdpNXJZTCtEMGlZNkpUcUIzMzBEZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoib1NKYUVIbXNXYkRlTDRkNDZRMnZDd3lWQmlBanAwQnQrQk5GSFA5cWxFWTN5MjJqNVVmSEozWGplWnZub2RwRXpaMHFtU2huNVc2YkFOczJ3YkFoaHc9PSJ9LCJtZSI6eyJpZCI6IjI1NDcwMDU2OTcwOToxM0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwk4OwR82ezZ/Mv8yzRc2ezZ/Mv8yzRc2ezZ/Mv8yz8JOAmyJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTQ3MDA1Njk3MDk6MTNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYS93cEc1WlhPa3hjNHVRa0oyT3hweDBTbTFJeTg1bGJSZlhyYWIyY3BJTCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcwNzQ5OTUzOX0=",      //Put Your Session Id Here
  author:  process.env.PACK_AUTHER ||  '亗『ＧＥＥ』亗',
  packname:  process.env.PACK_NAME || 'MADE BY n͜͡önesence ×',
  
  botname:   process.env.BOT_NAME === undefined ? "n͜͡önesence ×" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? '亗『ＧＥＥ』亗' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? true : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? true : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '961' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? true : process.env.AUTO_BIO,
  caption :process.env.CAPTION || "\t*•ᴘᴏᴡᴇʀᴇᴅ ʙʏ n͜͡önesence ×* ",   //*『sᴜʙsᴄʀɪʙᴇ • ʙʟᴀᴅᴇ ᴛᴇᴄʜ』*\n youtube.com/@blade444"),	
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'sithuwa-md',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
 
