const { REST, Routes } = require('discord.js') ;

const commands = [
    {
        name: 'ping',
        description: 'Replies with Pong!',
    },
];

const rest = new REST({ version: '10' }).setToken("MTIwNTIyMzMyNzkyNTQwNzc5NA.GeEgNf.UAytURDzpcJKPTaN9LsAFwuz6fTZNFnuW_tLaw");

(async()=>{
try{
    console.log('Started refreshing application (/) commands.');

    await rest.put(Routes.applicationCommands("1205223327925407794"), { body: commands });

    console.log('Successfully reloaded application (/) commands.');
} catch (error) {
    console.error(error);
}
}) ();