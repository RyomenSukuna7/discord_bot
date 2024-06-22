const { REST, Routes } = require('discord.js');

const rest = new REST({ version: '10' }).setToken("MTI1MzQwOTY3MzI1NjYzNjU2Ng.GJCLYP.XMpciPPj4ZJ8q7PsR5izrWZ8nY8DtJRjhxCWoc");
(async()=>{
    try {
        console.log('Started refreshing application (/) commands.');
      
        await rest.put(Routes.applicationCommands("1253409673256636566"), { body: [
          {
            name: 'vote',
            description: 'Voting for playing Among Us',
          },
         {
          name:"time",
          description:"set time"
         }
        ] });
      
        console.log('Successfully reloaded application (/) commands.');
      } catch (error) {
        console.error(error);
      }
})();
