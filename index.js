const botconfig = require("./botconfig.json");
const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
    console.log(`${bot.user.username} is online!`);
    bot.user.setActivity("on Tech's Project!")
});

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm" ) return;

    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    if(cmd === `${prefix}serverInfo`){

        let sicon = message.guild.displayAvatarURL;
        let serverembed = new Discord.RichEmbed()
        .setDescription("Server Information")
        .setColor("#1bd618")
        .setThumbnail(sicon)
        .addField("Server Name", message.guild.name)
        .addField("Created On", message.guild.createdAt)
        .addField("Total members", message.guild.memberCount);
     
     
     
        return message.channel.send(serverembed);
    }

    if(cmd === `${prefix}botinfo`){

        let bicon = bot.user.displayAvatarURL;
        let botembed = new Discord.RichEmbed()
        .setDescription("Bot Information")
        .setColor("#1bd618")
        .setThumbnail(bicon)
        .addField("Bot Name", bot.user.username);
       

        return message.channel.send(botembed)
    }
});

bot.login(botconfig.token);