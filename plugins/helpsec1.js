let handler = async m => m.reply(`
Konnichiwa! *${M.sender.username}*, *I'm Tobi!* I'm ready for help.

My perfix - !

 *✇ _General Commands_ ✇* 

◍ !owner

◍ !support

◍ !info

◍ !profile

◍ !speed

◍ !listonline

◍ !readmore

◍ !afk

◍ !darkjokes

◍ !brainly

◍ !google

◍ !meme

◍ !save

 *✇ _Media Commands_ ✇* 

◍ !sticker

◍ !toimg

◍ !play

◍ !ytmp3

◍ !ytmp4

◍ !yts

◍ !fb

◍ !ig

◍ !subreddit

 *✇ _Admin Commands_ ✇* 

◍ !add

◍ !kick

◍ !promote

◍ !demote

◍ !enable antilink

◍ !tagall

◍ !hidetag

◍ !linkgroup

 *✇ _Weeb Commands_ ✇* 

◍ !waifu

◍ !neko

◍ !wallpaperanime

Sooooo, My work is done. Bye! 

Any problem? Remember me :)


`.trim()) // Tambah sendiri kalo mau
handler.help = ['help 1']
handler.tags = ['info']
handler.command = /^help$/i
// handler.customPrefix = /^.*help ?1$/i

module.exports = handler
