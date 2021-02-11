const { MessageAttachment } = require('discord.js'),
    attachmentURL = 'attachment://',
    attachments = {},
    fs = require('fs');

fs.readdir("./images/", (err, files) => {
    if (err) console.log(err);
    for (const file of files) {
        const attachment = new MessageAttachment(`./images/${file}`, `attachment://${file}`), attachmentName = file.substring(0, file.indexOf("."));
        attachments[attachmentName] = attachment;
    }
    module.exports = {
        prefix: "s!",
        sembID: "794033850665533450",
        sirhID: "780995336293711875",
        adityaID: '506458497718812674',
        c2sID: "488478892873744385",
        lunchGuildID: '796153726586454077',
        sirhGuildID: "794054988224659490",
        ignoredGuilds: ["264445053596991498",
            "439866052684283905",
            "450100127256936458",
            "110373943822540800",
            "374071874222686211",
            "387812458661937152"],
        currentLogo: attachments['Current_Logo'],
        sharks: attachments['Sharks'],
        roadMap: attachments['roadMap'],
        simStatsLocation: attachments['SimStatsLocation'],
        geodeImage: attachments['GeodeLevelComparison'],
        prestigeImage: attachments['Prestige'],
        archieDance: attachments['ArchieDance'],
        patreon: attachments['Patreon_Mark_Coral'],
        sembcommunist: attachments['CommunistSemblance'],
        nanobots: attachments['Nanobots'],
        mementoMori: attachments['MementoMori']
    }
})

module.exports = {
    prefix: "s!",
    sembID: "794033850665533450",
    sirhID: "780995336293711875",
    adityaID: '506458497718812674',
    c2sID: "488478892873744385",
    lunchGuildID: '796153726586454077',
    sirhGuildID: "794054988224659490",
    ignoredGuilds: ["264445053596991498",
            "439866052684283905",
            "450100127256936458",
            "110373943822540800",
            "374071874222686211",
            "387812458661937152"],
}

/*
    currentLogo = new MessageAttachment("./images/Current_Logo.png", `${attachmentURL}Current_Logo.png`),
    sharks = new MessageAttachment("./images/Sharks.jpg", `${attachmentURL}Sharks.jpg`),
    roadMap = new MessageAttachment('./images/roadMap.png', `${attachmentURL}roadMap.png`),
    simStatsLocation = new MessageAttachment("./images/SimStatsLocation.png", `${attachmentURL}SimStatsLocation.png`),
    geodeImage = new MessageAttachment('./images/GeodeLevelComparison.png', `${attachmentURL}GeodeLevelComparison.png`),
    prestigeImage = new MessageAttachment('./images/Prestige.png', `${attachmentURL}Prestige.png`),
    archieDance = new MessageAttachment("./images/ArchieDance.mp4", `${attachmentURL}ArchieDance.mp4`),
    patreon = new MessageAttachment("./images/Patreon_Mark_Coral.jpg", `${attachmentURL}Patreon_Mark_Coral.jpg`),
    sembcommunist = new MessageAttachment('./images/CommunistSemblance.jpg', `${attachmentURL}CommunistSemblance.jpg`),
    nanobots = new MessageAttachment('./images/Nanobots.png', `${attachmentURL}Nanobots.png`),
    mementoMori = new MessageAttachment('./images/MementoMori.png', `${attachmentURL}MementoMori.png`);

module.exports = {
    prefix: "s!",
    sembID: "668688939888148480",
    sirhID: "279080959612026880",
    c2sID: "488478892873744385",
    sirhGuildID: "643957301425995821",
    currentLogo: currentLogo,
    sharks: sharks,
    roadMap: roadMap,
    simStatsLocation: simStatsLocation,
    geodeImage: geodeImage,
    prestigeImage: prestigeImage,
    archieDance: archieDance,
    patreon: patreon,
    sembcommunist: sembcommunist,
    nanobots: nanobots,
    mementoMori: mementoMori
}*/