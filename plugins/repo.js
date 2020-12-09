
/* Copyright (C) 2020 Yusuf Usta.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
WhatsAsena - Yusuf Usta
*/

const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');

const Language = require('../language');
const Lang = Language.getString('repo');

Asena.addCommand({pattern: 'repo', fromMe: true, desc: Lang.REPO_DESC}, (async (message, match) => {
    await message.sendMessage(
 '*WhatsAsena Bot Repo :* https://github.com/Quiec/WhatsAsena' , MessageType.text
    );
}));

Asena.addCommand({pattern: 'sysd', fromMe: true, desc: Lang.SYSD_DESC}, (async (message, match) => {
    const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
    await message.sendMessage(
        '```' + child + '```', MessageType.text
    );
}));
