// All downloaded packages are imported at the top of the file
import { Events, Client, GatewayIntentBits, OAuth2Scopes, PermissionFlagsBits, ChannelType } from "discord.js"
import { config } from "dotenv"
config({quiet: true})
const token = process.env.token

// All global scope variables are set at the top of the file, after the imports
const bot_intents = [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers]
const client = new Client({ intents: bot_intents })

// This function runs the first time the discord bot says it's 'Ready' (ClientReady), meaning when it's connected to discord's servers
client.once(Events.ClientReady, async () => {
  const invite = client.generateInvite({
    permissions: [PermissionFlagsBits.SendMessages],
    scopes: [OAuth2Scopes.Bot],
  })
  console.log(getDate(), "Ready!")
  console.log(getDate(), "Logged in as:", client.user.username)
  console.log(getDate(), "Invite:", invite)
  console.log(getDate(), "Servers:", client.guilds.cache.map(server => server.name))
})

// This function runs every time someone joins a server (GuildMemeberAdd)
// It sends a message to the channel with the name "welcome", welcoming the user to the server
client.on(Events.GuildMemberAdd, async (member) => {
  console.log(`${getDate()} ${member.guild.name} | ${member.user.username} (${member.id}) Joined`)
  const channel = member.guild.channels.cache.find(channel => channel.name.includes("welcome"))
  if (!channel || channel.type != ChannelType.GuildText) return
  const members = (await member.guild.members.fetch()).filter(member => !member.user.bot)
  const memberCount = members.size
  let memberCountSuffix = "th"
  if (memberCount % 10 === 1) memberCountSuffix = "st"
  if (memberCount % 10 === 2) memberCountSuffix = "nd"
  if (memberCount % 10 === 3) memberCountSuffix = "rd"
  try {
    channel.send(`Welcome to the server ${member}! you are the ${memberCount}${memberCountSuffix} person to join the server.`)
  } catch (err) {
    console.error(getDate(), "[Error] sending welcome message to welcome channel:", err)
  }
})

// This function is used everytime I print to the console
// It gets the date from your computer and formats it nicely
function getDate() {
  const date = new Date()
  return date.toDateString() + " " + date.getHours().toString().padStart(2, 0) + ":" + date.getMinutes().toString().padStart(2, 0)
}

// It is required to login to the bot, this tells discord which bot you are using
// Note: NEVER give your bot token out to anyone. The bot token gives complete control over the bot, with no verification needed to login
client.login(token)