interface Command {
  Name: string;
  Description: string;
}

export const commands: Command[] = [
  {
    Name: 'addrelated',
    Description: 'Adds a related song based on the current one playing',
  },
  {
    Name: 'flipcoin',
    Description: 'Flips a coin',
  },
  {
    Name: 'help',
    Description: 'Displays a list of all commands',
  },
  {
    Name: 'isplaying',
    Description: 'Gives the name of the currently playing song',
  },
  {
    Name: 'join',
    Description: 'Tells the bot to join a voice channel',
  },
  {
    Name: 'leave',
    Description: 'Tells the bot to disconnect from a voice channel',
  },
  {
    Name: 'magic',
    Description:
      'Based on a card name provided, returns an image, cardname and legality in commander and standard if on the list',
  },
  {
    Name: 'matchup',
    Description: 'Creates matchup pairings based on the names it is given',
  },
  {
    Name: 'play',
    Description:
      'Adds a song to the queue and starts playing it if it is the first on in the queue',
  },
  {
    Name: 'pokemon',
    Description:
      'Based on a card code provided, returns an image, cardname and legality in standard if on the list',
  },
  {
    Name: 'queue',
    Description: 'Adds a song or a link to the current queue',
  },
  {
    Name: 'rolldie',
    Description:
      'Rolls dice based on the number of roles provided, up to a maximum of 6',
  },
  {
    Name: 'skip',
    Description: 'Tells the bot to skip the current song',
  },
  {
    Name: 'Stop',
    Description: 'Tells the bot the stop playing the current song',
  },
  {
    Name: 'yugioh',
    Description:
      'Based on a card name provided, returns an image, cardname and banlist status if on the list',
  },
];
