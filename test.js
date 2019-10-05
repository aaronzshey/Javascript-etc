// I will add a picture and a color later
if (command === "help"){
    message.channel.send({embed: {
      title: "Commands:",
      fields: [
        { name: ",8ball", value:"Ask the Magic 8-Ball a question!"", inline: true},
        { name: ",ping", value:"Proides the API latency", inline: true},
        { name: ",kick", value:"Kick a user.  Mod powers required", inline: true},
        { name: ",ban", value:"Ban a user.  Mod powers required", inline: true},
        { name: ",say", value:"Make the bot say something", inline: true},
        { name: ",purge", value:"Purge messages.  Mod powers also required", inline: true},
      ]
    }
  }
)
}
