const { Client, GatewayIntentBits } = require('discord.js');


const client = new Client({
   intents: [GatewayIntentBits.Guilds,
   GatewayIntentBits.GuildMessages,
   GatewayIntentBits.MessageContent,
   ]
});

client.on("messageCreate", (message) => {
   if (message.author.bot) return;
   message.reply({ content: "Hello from the bot!" });
});

client.on("interactionCreate", (interaction) => {
   // if (!interaction.isCommand()) return;

   // const { commandName } = interaction;

   // if (commandName === "ping") {
       interaction.reply("Pong!");
// }
   
});

client.login("MTIwNTIyMzMyNzkyNTQwNzc5NA.GeEgNf.UAytURDzpcJKPTaN9LsAFwuz6fTZNFnuW_tLaw");
