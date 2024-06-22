const { Client, GatewayIntentBits, PollLayoutType } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds,GatewayIntentBits.GuildMessages,GatewayIntentBits.MessageContent,GatewayIntentBits.GuildMessagePolls] });

client.on("messageCreate",(message)=>{
    if(message.author.bot) return;

    if(message.content==="hi" || message.content==="Hi" || message.content==="HI" || message.content==="Hello" || message.content==="hello" ){
        message.reply({
            content:`hello ${message.author.globalName} welcome to Amoung Us game server`
        })
    }
});

    client.on("interactionCreate",async(interaction)=>{
        

        if(interaction.isCommand()){
            if(interaction.commandName==="vote"){
                interaction.channel.send({
                    poll:{
                        question:{text:"Who want to play Among Us"},
                        answers:[
                            {text:"In"},
                            {text:"Not In"}
                        ],
                        allowMultiselect:false,
                        layoutType:PollLayoutType.Default,
                        duration:1
                    }
                })
            }

            else if(interaction.commandName==="time"){
                interaction.reply({content:"This is not working now"})
            }
        }


    })

client.login("MTI1MzQwOTY3MzI1NjYzNjU2Ng.GJCLYP.XMpciPPj4ZJ8q7PsR5izrWZ8nY8DtJRjhxCWoc")