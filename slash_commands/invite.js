module.exports = {
    permissionRequired: 0,
    run: async (client, interaction) => {
        return interaction.send(`https://discord.com/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot+applications.commands`, { ephemeral: true });
    }
}