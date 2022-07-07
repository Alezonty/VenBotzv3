let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(bank)).buffer(), `
*───────「 DONATE 」 ─────*
╭─「 Donasi • Pulsa 」
│Dana   [081248537085]
│Pulsa  [081248537085]
│Gopay  [081248537085]
│OvO  [081248537085]
│Trakteer [https://trakteer.id/RezzBot]
╰────
`.trim(), 'Donasi jan asal mencet', 'Owner Bot', '.owner')
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
