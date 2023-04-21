const { Client, Partials, Collection } = require("discord.js");
const User = require("./models/User");
const Guild = require("./models/Guild");
require("dotenv").config();
require("colors");
const client = new Client({
    intents: 14023,
    partials: [Partials.User, Partials.Message, Partials.GuildMember, Partials.Channel],
    allowedMentions: { repliedUser: false },
});
client.commands_array = [];
client.commands = new Collection();
client.colors = { default: 16777215, error: "#FF7518" };
client.emoji = {
    success: "<:success:1062266792308912199>",
    danger: "⚠",
    error: "<:error:1062274242927923220>",
    eco: {
        coin: `:coin:`,
        bank: `🏦`,
        cash: `💳`,
        all: `🗂️`,
        shop: `<:shop:1070388704637624421>`,
        comm: `<:commision:1099031528270475304>`
    }
};
client.db = { user: User, guild: Guild };

require("./handlers/eventHandler").init(client);

client.login(process.env.token).then(user => console.log(`[APP]: `.green.bold + `The application has been successfully downloaded!`.blue.bold));

module.exports = client;