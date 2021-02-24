---
title: "How to build a Discord bot with Discord.js"
excerpt: "Discord has come far and it's much more than a voice chat for gamers nowadays. Learn to leverage its full potential by building a bot with Discord.js and give your online community the best user experience."
coverImage: "/assets/blog/how-to-build-a-discord-bot-with-discordjs/cover.jpg"
date: "2021-02-23T01:00:00.000Z"
ogImage:
  url: "/assets/blog/how-to-build-a-discord-bot-with-discordjs/cover.jpg"
---

### What is Discord?

[Discord](https://discord.com/) is:

> A VoIP, instant messaging and digital distribution platform designed for creating communities. Users communicate with voice calls, video calls, text messaging, media and files in private chats or as part of communities called "servers." Servers are a collection of persistent chat rooms and voice chat channels.

Source: [Wikipedia](<https://en.wikipedia.org/wiki/Discord_(software)>).

### Why should you learn Discord bots?

Discord was born for gamers who need an efficient and reliable way to communicate, through voice and chat alike.
In recent years its popularity grew outside of gaming community and these proving covid times accelerated Discord adoption in any kind of community.

Discord bots are applications which can perform automated tasks on your server, such as welcoming new members, moderating content, even playing music.

Official Discord APIs are accessible in multiple programming languages, including JavaScript, allowing you to create any sort of bot to give your online community a compelling user experience. Moreover, the possibility to integrate third party APIs opens a universe limited only by your imagination.

### I like firsts, good or bad, they’re always memorable

First of all you need to create an account on [Discord Developer Portal](https://discord.com/developers/applications).

You can either sign up or login with your regular Discord account, it's also possible to scan the QR code provided for logging in via mobile app.

<figure class="image" aria-label="Discord login">
<img
  src="/assets/blog/how-to-build-a-discord-bot-with-discordjs/discord-login.jpg"
  alt="Discord login"
  style="max-height: 600px;"
/>
<figcaption>Discord login</figcaption>
</figure>

In the dashboard, click _New Application_ on the top right.

<figure class="image" aria-label="Discord dashboard - New Application">
<img
  src="/assets/blog/how-to-build-a-discord-bot-with-discordjs/discord-dashboard.jpg"
  alt="Discord dashboard - New Application"
  style="max-height: 600px;"
/>
<figcaption>Discord dashboard - New Application</figcaption>
</figure>

Specify a name for your application and click _Create_.

<figure class="image" aria-label="Discord dashboard - Create an application">
<img
  src="/assets/blog/how-to-build-a-discord-bot-with-discordjs/discord-new-app.jpg"
  alt="Discord dashboard - Create an application"
  style="max-height: 600px;"
/>
<figcaption>Discord dashboard - Create an application</figcaption>
</figure>

This is how your app overview looks like.

<figure class="image" aria-label="Discord dashboard - App overview">
<img
  src="/assets/blog/how-to-build-a-discord-bot-with-discordjs/discord-app-overview.jpg"
  alt="Discord dashboard - App overview"
  style="max-height: 600px;"
/>
<figcaption>Discord dashboard - App overview</figcaption>
</figure>

> **Note:** do not share client secret under any circumstance.

Navigate to the _Bot_ section, then click _Add Bot_.

<figure class="image" aria-label="Discord dashboard - Add Bot">
<img
  src="/assets/blog/how-to-build-a-discord-bot-with-discordjs/discord-app-add-bot.jpg"
  alt="Discord dashboard - Add Bot"
  style="max-height: 600px;"
/>
<figcaption>Discord dashboard - Add Bot</figcaption>
</figure>

This is how your bot overview looks like.

<figure class="image" aria-label="Discord dashboard - Bot overview">
<img
  src="/assets/blog/how-to-build-a-discord-bot-with-discordjs/discord-app-bot-overview.jpg"
  alt="Discord dashboard - Bot overview"
  style="max-height: 600px;"
/>
<figcaption>Discord dashboard - Bot overview</figcaption>
</figure>

> **Note:** do not share token under any circumstance.

For further information please refer to the [official Discord documentation](https://discord.com/developers/docs/intro).

### You are a clan of two

Discord neither provide a way to run a server locally nor mocking it.

This is the reason why your workflow will be:

- Create a server for development, one-off
- Invite your bot to your server, one-off
- Run your bot locally
- Manually test your bot on the server, not ideal but there isn't currently a better way

### I’m sorry, lady, I don’t understand frog

Let's start by creating a project with basic dependencies:

1. Create a folder in a path of your choosing.
1. Initialize your project by running `npm init -y`.
1. Alter `package.json` as you see fit (optional).
1. `npm i discord.js`, your bread and butter from now on.
1. `npm i dotenv`, to handle environments comfortably using a `.env` file.
1. `npm i -D nodemon`, to apply source code changes right away by automatically restarting your bot.
1. Create a `.gitignore` file with at the very least the following content: 
> node_modules  
> .env
1. Initialize the repository by running `git init`.

Feel free to add [ESLint](https://eslint.org/) and any other auxiliary tool you like to work with.

### There you will find Ahsoka Tano

You're going to write some code to interact with your bot.

In the root folder of your project create an `index.js` file with the following content:

```javascript
const Dotenv = require('dotenv');
const Discord = require('discord.js');

Dotenv.config();

const client = new Discord.Client();

const commandPrefix = '!ex';

client.once('ready', () => console.log('Ready!'));

client.on('message', message => {
    if (message?.content === `${commandPrefix} hello there`) {
        message.channel.send('General Kenobi');
    }
});

client.login(process.env.BOT_TOKEN);
```

Let's take a closer look:

- `Dotenv.config()` loads the content of `.env` file, populating environment variables.
- `new Discord.Client()` as you guessed creates an instance of client provided by Discord.js, your bot basically _is_ this client.
- `const commandPrefix = '!ex'`, it's quite common for bots accepting commands to tell them apart from regular text messages with this trick.
- `client.once('ready', () => //...)` is an event triggered when your bot is up and running.
- `client.on('message', message => //...)` is an event triggered when _any_ message is sent to a text channel.
- `client.login(process.env.BOT_TOKEN)` allows your bot to access Discord network using its token, which for local development is fetched from the `.env` file while in production will be fetched from environment variables added to your hosting service (e.g. Heroku).

The following block represents a command issued to your bot, which will reply to the greeting:

```javascript
if (message?.content === `${commandPrefix} hello there`) {
    message.channel.send('General Kenobi');
}
```

The final results looks like this:

<figure class="image" aria-label="Discord bot - Command example">
<img
  src="/assets/blog/how-to-build-a-discord-bot-with-discordjs/discord-app-command-example.jpg"
  alt="Discord bot - Command example"
  style="max-height: 600px;"
/>
<figcaption>Discord bot - Command example</figcaption>
</figure>

### Tell her you were sent by Bo-Katan


### Conclusion

Next.js is still young and is missing some capabilities, such as RSS feed generation. However its design comprises only a handful of moving parts, which makes adjusting the project to meet your needs quite doable.

I'm fairly sure more features will come in time from Vercel and from Next.js community. Until then, don't be afraid to tinker with it.

> Those who can imagine anything, can create the impossible.  
> ― Alan Turing 
