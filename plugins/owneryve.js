let handler = function (m) {
	this.sendContact(m.chat, '6281248537085', '"Owner Ku Tuh Kak*', m)
}

handler.customPrefix = ['Owner bot'] 
handler.command = new RegExp

module.exports = handler
