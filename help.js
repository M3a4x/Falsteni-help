const Discord = require("discord.js");
const client = new Discord.Client();
const db = require('quick.db')
const ms = require('ms')
const request = require('request');
const fs = require('fs');
client.on('ready', function() {
    console.log(`i am ready ${client.user.username}`);
});
client.on('ready', () => {
  client.user.setGame(` FuCk All Of You | fhelp .`,'https://www.twitch.tv/mjrmqm');
  console.log('---------------');
  console.log('Dark-bot Bot Is Online')
  console.log('---------------')
});
client.on('message', message => {
     if (message.content === ".servers") {
     let embed = new Discord.RichEmbed()
  .setColor("#0000FF")
  .addField("**Server: **" , client.guilds.size)
  message.channel.sendEmbed(embed);
    }
if (message.content === '*help') {
         let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)    
      .addField("** 🎶 اوامر الميوزك**","** **")
      .addField("***play :musical_note:**","**لـ تشغيل المطلوب**")
      .addField("***stop  :musical_keyboard:**","**لـ ايقاف المطلوب**")
      .addField("***skip :musical_score:**","**لـ تخطي الاغنية المشغله**")
      .addField("***vol :musical_score:**","**لـ رفع و تخفيض صوت الأغنية**")
.setColor('RANDOM')
  message.author.sendEmbed(embed);
    }
});

client.login(process.env.BOT_TOKEN);
