import { Command } from '../Class/command';

export class Help extends Command {

  static match(message) {
    return message.content.startsWith('$help')
  }
  static action(message, Discord, bot) {


    const Embed = new Discord.MessageEmbed()
      .setColor('#0099ff')
      .setTitle('How to use Mega Bot')
      .setAuthor('Mega Bot', 'https://image.noelshack.com/fichiers/2020/34/7/1598188353-icons8-jason-voorhees-500.png')
      .setDescription('You need to know !')
      .setThumbnail('https://image.noelshack.com/fichiers/2020/34/7/1598188353-icons8-jason-voorhees-500.png')
      .addFields(
        { name: 'Install the bot ', value: "https://discord.com/api/oauth2/authorize?client_id=746452184777883690&permissions=8&scope=bot" },
        { name: '```$help```', value: "You can have this overlay to know how to use this bot !" },
        { name: '```$ping```', value: "Are you lagging ? Or I'am ?" },
        { name: '```poll```', value: "\n Create a poll for everyone  \n ```$poll \"this is a question\" \"option1,option2,option3\" timeout" + "(minutes) ``` " },
          {name: "ADMINISTRATOR COMMAND", value:'__________________________'},
          { name: '```$mute```', value: "\n mute the one you want ! \n ```$mute @user 1d \"insult\"``` " },
        { name: '```$unmute```', value: "\n unmute the one you want ! \n ```$unmute @user``` " },
          { name: '```$addRoleReact```', value: "\n Add a message to react !  \n ```$addRoleReact messageidToReact``` " },
          { name: '```$addRoleTo```', value: "\n Add an emojy => role !  \n ```$addRoleTo messageidToReact Emojy @role``` " }

      )
      .setTimestamp()
      .setFooter('See you soon !', 'https://image.noelshack.com/fichiers/2020/34/7/1598188353-icons8-jason-voorhees-500.png');


    message.author.send(Embed);
    message.delete();

  }
}
