import { Events, Client, GatewayIntentBits, OAuth2Scopes, PermissionFlagsBits, ChannelType } from "discord.js"
import { config } from "dotenv"
config({quiet: true})
const token = process.env.token

const bot_intents = [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers]
const client = new Client({ intents: bot_intents })

client.once(Events.ClientReady, async () => {
  console.log(getDate(), "Ready!")
  console.log(getDate(), "Logged in as:", client.user.username)
  console.log(getDate(), "Invite:", client.generateInvite({ permissions: [PermissionFlagsBits.SendMessages], scopes: [OAuth2Scopes.Bot] }))
  console.log(getDate(), "Servers:", client.guilds.cache.map(server => server.name))
})

client.on(Events.GuildMemberAdd, (member) => {
  console.log(`${getDate()} ${member.guild.name} | ${member.user.username} (${member.id}) Joined`)
  const channel = member.guild.channels.cache.find(channel => channel.name.includes("welcome"))
  if (!channel || channel.type != ChannelType.GuildText) return
  try {
    channel.send(`Welcome to the server ${member}`)
  } catch (err) {
    console.error(getDate(), "[Error] sending welcome message to welcome channel:", err)
  }
})

function getDate() {
  const date = new Date()
  return date.toDateString() + " " + date.getHours().toString().padStart(2, 0) + ":" + date.getMinutes().toString().padStart(2, 0)
}

client.login(token)