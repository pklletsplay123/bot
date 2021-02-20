/* eslint-disable quotes */
const fs = require('fs-extra')
const { prefix } = JSON.parse(fs.readFileSync('config.json'))

exports.wait = () => {
    return `[ WAIT ] Sedang di proses⏳ silahkan tunggu sebentar ya bro 🍻`
}

exports.ok = () => {
    return `Yossha!! 👍🏼~`
}

exports.wrongFormat = () => {
    return `Format yang anda masukkan salah! Silakan cek cara penggunaan di *${prefix}menu*.`
}

exports.emptyMess = () => {
    return `Harap masukkan pesan yang ingin disampaikan!`
}

exports.emptyMessPremium = () => {
    return `Harap masukkan nama anda!`
}

exports.cmdNotFound = (cmd) => {
    return `Command *${prefix}${cmd}* tidak ditemukan!`
}

exports.blocked = (ownerNumber) => {
    return `Bot tidak menerima panggilan. Karena kamu telah melanggar Syarat & Ketentuan yang berlaku, maka kamu telah diblok!\n\nHarap hubungi owner: wa.me/${ownerNumber.replace('@c.us', '')}`
}

exports.ownerOnly = () => {
    return `Command ini khusus Owner anjir!`
}

exports.doneOwner = () => {
    return `Sudah selesai, Owner ku Sayang~`
}

exports.doneUnreg = () => {
    return `Data anda telah berhasil di Unregistrasi, Silahkan Register Ulang untuk menggunakan layanan IZUMI-BOT`
}

exports.groupOnly = () => {
    return `Command ini hanya bisa digunakan di dalam grup anjay!`
}

exports.adminOnly = () => {
    return `Command ini hanya bisa digunakan oleh admin grup anjay!`
}

exports.notNsfw = () => {
    return `Command NSFW belum diaktifkan setan!! 👿`
}

exports.nsfwOn = () => {
    return `Command NSFW berhasil *diaktifkan* \n*Ingat!! dosa ditanggung sendiri*\nKirim perintah !nsfwlist untuk melihat menu maksiat yang tersedia`
}

exports.nsfwOff = () => {
    return `Command NSFW berhasil *dinonaktifkan*!\nSelamat anda telah terhindar dari siksa api neraka🙏🏼`
}

exports.nsfwAlready = () => {
    return `Command NSFW sudah diaktifkan sebelumnya setan!! 👿`
}

exports.addedGroup = (chat) => {
    return `Terima kasih telah mengundang IZUMI-BOT, para warga grub *${chat.contact.name}*!\n\nSilakan register terlebih dahulu dengan cara ketik:\n*${prefix}register* nama | umur`
}

exports.nhFalse = () => {
    return `Kode Nuklir yang anda minta tidak ditemukan!`
}

exports.listBlock = (blockNumber) => {
    return `------[ PARA NARAPIDANA ]------\n\nTotal narapidana: *${blockNumber.length}* user\n`
}

exports.notPremium = () => {
    return `Sumimasen! 🙏🏼\nCommand ini hanya untuk user premium saja senpai 😟\n\nSilahkan ketik !reqpremium (nama) untuk mendapatkan akses`
}

exports.notAdmin = () => {
    return `hadeh... ente bukan admin! 😓`
}

exports.adminAlready = () => {
    return `Tidak dapat mem-promote member yang merupakan admin! 😓`
}

exports.botNotPremium = () => {
    return `Bot ini tidak mendukung command premium. Silakan hubungi owner bot ini\nContact Owner: wa.me/6287833474586 (Yuuru)`
}

exports.botNotAdmin = () => {
    return `Jadikan IZUMI-BOT sebagai admin terlebih dahulu senpai! 😟`
}

exports.ytFound = (res) => {
    return `*Video yang anda minta telah ditemukan!*\n\n⚜ *Judul*: ${res.title}\n⚜ *Deskripsi*:\n${res.desc}\n⚜ *Durasi*: ${res.duration} menit\n\n[ WAIT ] Video sedang di proses⏳ silahkan tunggu sebentar ya 🍻`
}

exports.notRegistered = () => {
    return `Kamu belum terdaftar di database! 😓\n\nSilakan register terlebih dahulu dengan format:\n*${prefix}register* nama | umur\n\nNote:\nHarap save kontak IZUMI-BOT agar bisa mendapatkan nomor serial!!`
}

exports.registered = (name, age, userId, time, serial) => {
    return `*🔰 REGISTRASI 🔰*\n\nSelamat!! kamu telah terdaftar dengan akun:\n\n⚜ *Nama*: ${name}\n⚜ *Umur*: ${age}\n⚜ *ID*: ${userId}\n⚜ *Waktu pendaftaran*: ${time}\n⚜ *Kode Serial*: ${serial}\n\nCatatan:\nJangan pernah menyebarkan *kode serial* anda ke pada siapapun!\n\nKetik *${prefix}rules* terlebih dahulu ya~`
}

exports.registeredAlready = () => {
    return `Kamu sudah mendaftar sebelumnya senpai 😟`
}

exports.received = (pushname) => {
    return `Halo ${pushname}! 👋🏼\nTerima kasih telah melapor, laporan anda akan IZUMI-BOT kirimkan ke Owner.`
}

exports.receivedpremium = (pushname) => {
    return `Halo ${pushname}! 👋🏼\nPermintaan akses premium sedang diproses, \npermintaan anda akan segera IZUMI-BOT kirimkan ke Owner.`
}

exports.daily = (time) => {
    return `Sumimasen 🙏🏼, tetapi kamu telah mencapai limit penggunaan command hari ini.\nSilakan tunggu *${time.hours}* jam *${time.minutes}* menit *${time.seconds}* detik lagi untuk mendapat limit tambahan`
}

exports.videoLimit = () => {
    return `Size video yang anda minta terlalu besar 😧`
}

exports.joox = (result) => {
    return `*Lagu yang anda minta telah ditemukan!*\n\n⚜ *Penyanyi*: ${result[0].penyanyi}\n⚜ *Judul*: ${result[0].judul}\n⚜ *Album*: ${result[0].album}\n⚜ *Ext*: ${result[0].ext}\n⚜ *Size*: ${result[0].filesize}\n⚜ *Durasi*: ${result[0].duration}\n\n[ WAIT ] Lagu sedang di proses⏳ silahkan tunggu sebentar ya 🍻`
}

exports.gsm = (result) => {
    return `➸ *Model HP*: ${result.title}\n➸ *Spesifikasi*: ${result.spec}`
}

exports.receipt = (result) => {
    return `${result.title}\n\n${result.desc}\n\n*Bahan-Bahan*: ${result.bahan}\n\n*Cara membuat*:\n${result.cara}`
}

exports.ytResult = (urlyt, title, channel, duration, views) => {
    return `⚜ *Judul*: ${title}\n⚜ *Channel*: ${channel}\n⚜ *Durasi*: ${duration}\n⚜ *Views*: ${views}\n⚜ *Link*: ${urlyt}`
}

exports.Nekopoii = (url, title, detail) => {
    return `⚜ *Judul*:\n${title}\n⚜ *Deskripsi*:\n${detail}\n⚜ *Link*:\n${url}`
}

exports.profile = (username, status, premi, benet, adm, level, requiredXp, xp) => {
    return `-----[ *USER INFO* ]-----\n\n⚜ *Username*: ${username}\n⚜ *Status*: ${status}\n⚜ *Premium*: ${premi}\n⚜ *Banned*: ${benet}\n⚜ *Admin*: ${adm}\n\n=_=_=_=_=_=_=_=_=_=_=_=_=\n\nYour progress:\n⚜ *Level*: ${level}\n⚜ *XP*: ${xp} / ${requiredXp}`
}

exports.detectorOn = (name, formattedTitle) => {
    return `*「 ANTI GROUP LINK 」*\n\nPerhatian untuk seluruh warga grub ${(name || formattedTitle)}\nGrup ini memiliki anti-group link detector, apabila ada salah satu member mengirim group link di sini maka dia akan ter-kick secara otomatis.\n\nSekian terima kasih.\n- Admin ${(name || formattedTitle)}`
}

exports.detectorOff = () => {
    return `Fitur anti-group link berhasil *dinonaktifkan* di grub ini!`
}

exports.detectorOnAlready = () => {
    return `Fitur anti-group link telah diaktifkan sebelumnya di grub ini`
}

exports.antiNsfwOn = (name, formattedTitle) => {
    return `*「 ANTI NSFW LINK 」*\n\nPerhatian untuk seluruh warga grub ${(name || formattedTitle)}\nGrup ini memiliki anti-NSFW link detector, apabila ada salah satu member mengirim link NSFW/porn di sini maka dia akan ter-kick secara otomatis.\n\nSekian terima kasih.\n- Admin ${(name || formattedTitle)}`
}

exports.antiNsfwOff = () => {
    return `Fitur anti-NSFW link berhasil *dinonaktifkan* di grub ini!`
}

exports.antiNsfwOnAlready = () => {
    return `Fitur anti-NSFW link telah diaktifkan sebelumnya di grub ini`
}

exports.linkDetected = () => {
    return `*「 ANTI GROUP LINK 」*\n\nEnte ketahuan telah mengirim link group chat! 😟\nMaaf, anda telah melanggar rules grub, admin terpaksa harus mengeluarkan mu...\nSayonara 👋🏼`
}

exports.levelingOn = () => {
    return `Fitur leveling berhasil *diaktifkan*!`
}

exports.levelingOff = () => {
    return `Fitur leveling berhasil *dinonaktifkan*!`
}

exports.levelingOnAlready = () => {
    return `Fitur leveling telah diaktifkan sebelumnya Senpai`
}

exports.levelingNotOn = () => {
    return `Fitur leveling belum diaktifkan anjay`
}

exports.levelNull = () => {
    return `Kamu belum memiliki level 😟`
}

exports.welcome = (event) => {
    return `Selamat datang @${event.who.replace('@c.us', '')}!\n\nSemoga betah di grup ${(name || formattedTitle)}\n *Jangan lupa membaca Rules grub ya* `
}

exports.welcomeOn = () => {
    return `Fitur welcome berhasil *diaktifkan* di grub ini!`
}

exports.welcomeOff = () => {
    return `Fitur welcome berhasil *dinonaktifkan* di grub ini!`
}

exports.welcomeOnAlready = () => {
    return `Fitur welcome telah diaktifkan sebelumnya di grub ini`
}

exports.minimalDb = () => {
    return `Perlu setidaknya *10* user yang memiliki level di database!`
}

exports.autoStikOn = () => {
    return `Fitur auto-stiker berhasil *diaktifkan*!`
}

exports.autoStikOff = () => {
    return `Fitur auto-stiker berhasil *dinonaktifkan*!`
}

exports.autoStikOnAlready = () => {
    return `Fitur auto-stiker telah diaktifkan sebelumnya.`
}

exports.afkOn = (pushname, reason) => {
    return `Fitur AFK berhasil *diaktifkan*!\n\n⚜ *Nama*: ${pushname}\n⚜ *Alasan*: ${reason}`
}

exports.afkOnAlready = () => {
    return `Fitur AFK telah diaktifkan sebelumnya.`
}

exports.afkMentioned = (getReason, getTime) => {
    return `*「 AFK MODE 」*\n\nSssttt! Orangnya lagi AFK, jangan diganggu!\n⚜ *Alasan*: ${getReason}\n⚜ *Sejak*: ${getTime}`
}

exports.afkDone = (pushname) => {
    return `*${pushname}* telah kembali dari AFK! Selamat datang kembali ${pushname}`
}

exports.gcMute = () => {
    return `*「 MUTED 」*\n\nSssttt! hanya admin saja yang dapat mengirim pesan ke grup ini.`
}

exports.gcUnmute = () => {
    return `*「 UNMUTED 」*\n\nSekarang semua warga grub dapat mengirim chat di grup ini.`
}

exports.notNum = (q) => {
    return `"${q}", bukan angka njir!`
}

exports.playstore = (app_id, title, developer, description, price, free) => {
    return `⚜ *Nama APK*: ${title}\n⚜ *ID*: ${app_id}\n⚜ *Developer*: ${developer}\n⚜ *Status*: ${free}\n⚜ *Harga*: ${price}\n⚜ *Deskripsi*: ${description}`
}

exports.shopee = (nama, harga, terjual, shop_location, description, link_product) => {
    return `➸⚜ *Nama Toko*: ${nama}\n⚜ *Harga*: ${harga}\n⚜ *Terjual*: ${terjual}\n⚜ *Lokasi*: ${shop_location}\n⚜ *Link produk*: ${link_product}\n⚜ *Deskripsi*: ${description}`
}

exports.pc = (pushname) => {
    return `*「 REGISTRATION 」*\n\nAkun senpai berhasil terdaftar! Silakan cek pesan yang IZUMI-BOT kirimkan di private chat ${pushname} ya\n\nNote:\nJika senpai tidak menerima pesan dari IZUMI-BOT, berarti kamu belum save nomor bot.`
}

exports.registeredFound = (name, age, time, serial, userId) => {
    return `*「 REGISTERED 」*\n\nAkun telah ditemukan!\n\n➸ *Nama*: ${name}\n➸ *Umur*: ${age}\n➸ *ID*: ${userId}\n➸ *Waktu pendaftaran*: ${time}\n➸ *Serial*: ${serial}`
}

exports.registeredNotFound = (serial) => {
    return `Akun dengan serial: *${serial}* tidak bisa IZUMI-BOT temukan! 😓`
}

exports.ytPlay = (result) => {
    return `*「 PLAY 」*\n\n⚜ *Judul*: ${result.title}\n⚜ *Durasi*: ${result.duration}\n⚜ *Link*: ${result.url}\n\n[ WAIT ] Sedang di proses⏳ silahkan tunggu sebentar ya bro 🍻`
}
exports.pcOnly = () => {
    return `Command ini hanya bisa digunakan di dalam private chat saja senpai! 😓`
}

exports.linkNsfw = () => {
    return `*「 ANTI NSFW LINK 」*\n\nEnte ketahuan telah mengirim link NSFW!\nMaaf, anda telah melanggar rules grub, admin terpaksa harus mengeluarkan mu...\nSayonara 👋🏼`
}

exports.ageOld = () => {
    return `ente sudah terlalu tua untuk menggunakan command ini! Mohon kembali ke masa muda ente agar bisa menggunakannya.`
}

exports.menuText = () => {
    return `
♻ *Command Text maker* ♻

 Untuk Spasi Teks menggunakan *+*
 contoh : ${prefix}text1 neon izumi+bot

⚜ *${prefix}text1 burnpaper* _teks_
⚜ *${prefix}text1 candlemug* _teks_
⚜ *${prefix}text1 lovemsg* _teks_
⚜ *${prefix}text1 mugflower* _teks_
⚜ *${prefix}text1 narutobanner* _teks_
⚜ *${prefix}text1 paperonglass* _teks_
⚜ *${prefix}text1 romancetext* _teks_
⚜ *${prefix}text1 shadowtext* _teks_
⚜ *${prefix}text1 tiktokeffect* _teks_

♻ *IZUMI-BOT* ♻
    `
}

exports.fakeLink = () => {
    return `Ups, link yang anda kirim terlihat mencurigakan. Demi keamanan grup, admin terpaksa harus mengeluarkan mu...\nSayonara 👋🏼\n`
}

exports.muteChatOn = () => {
    return `Berhasil *mute* bot pada grup ini!`
}

exports.muteChatOff = () => {
    return `Berhasil *unmute* bot pada grup ini!`
}

exports.muteChatOnAlready = () => {
    return `Mute telah diaktifkan di grup ini sebelumnya!`
}

exports.randomQuran = (ranquran) => {
    return `
*Nama surah*: ${ranquran.data.result.nama} / ${ranquran.data.result.asma}
*Arti*: ${ranquran.data.result.arti}
*Surat ke*: ${ranquran.data.result.nomor}
*Keterangan*:\n ${ranquran.data.result.keterangan}
*Link audio*: ${ranquran.data.result.audio}
    `
}

exports.hadis = () => {
    return `
_*Assalamu'alaikum wr. wb.*_

*Daftar hadis*:
1. Hadis Bukhari ada 6638 hadis
    _example_: ${prefix}hadis bukhari 1

2. Hadis Muslim ada 4930 hadis
    _example_: ${prefix}hadis muslim 25

3. Hadis Tirmidzi ada 3625 hadis
    _example_: ${prefix}hadis tirmidzi 10

4. Hadis nasai ada 5364 hadis
    _example_: ${prefix}hadis nasai 6

5. Hadis Ahmad ada 4305 hadis
    _example_: ${prefix}hadis ahmad 5

6. Hadis Abu Daud ada 4419 hadis
    _example_: ${prefix}hadis abudaud 45

7. Hadis Malik ada 1587 hadis
    _example_: ${prefix}hadis malik 45

8. Hadis Ibnu Majah ada 4285 hadis
    _example_: ${prefix}hadis ibnumajah 8

9. Hadis Darimi ada 2949 hadis
    _example_: ${prefix}hadis darimi 3

*Semoga bermanfaat*
_*Wassalamualaikum wr. wb.*_
    `
}

exports.limit = () => {
    return `
🔰 -----[ LIMIT ]----- 🔰

Hit penggunaan senpai telah habis! Silahkan senpai bersabar sampai jam 00.00 untuk mendapatkan akses limit\nUntuk mendapatkan akses Unlimited Hit Command silahkan ketik !reqpremium untuk mendaftar premium
    `
}

exports.asmaulHusna = (assna) => {
    return `
───❉ 𝐀𝐬𝐦𝐚𝐮𝐥 𝐇𝐮𝐬𝐧𝐚 ❉──

*${assna.name}*
❏ *Asmaul husna ke*: ${assna.number}
❏ *Pelafalan*: ${assna.transliteration}
❏ *Inggris*: ${assna.en.meaning}
    `
}

exports.menu = (jumlahUser, level, xp, role, pushname, requiredXp, premium) => {
    return `
🔰 -----[ *IZUMI-BOT* ]----- 🔰

Hai, ${pushname}! 👋🏻
Anda adalah *${premium}*
Berikut adalah beberapa command yang ada pada bot ini!✨

♻ Command IZUMI-BOT :

  ⚜ *!nsfwlist* 🔞
  ⚜ *!me* (melihat profil anda)
  ⚜ *!leveling [enable|disable]*
  ⚜ *!level* (Melihat level senpai) 
  ⚜ *!leaderboard* (Melihat leaderboard)
  ⚜ *!limit* (Melihat limit tersisa senpai)
  ⚜ *!runtime* 
  ⚜ *!afk* (!alasan AFK)
  ⚜ *!snk* (Syarat & ketentuan)
  ⚜ *!botstat* (Status BOT)
  ⚜ *!listblock*
  ⚜ *!ping* 
  ⚜ *!delete* (replyChatBot)
  ⚜ *!report* 
  ⚜ *!botinfo* 
  ⚜ *!join* (!join linkGroup)
  ⚜ *!ownerbot*
  ⚜ *!getpic* (@62878xxxxx)
  ⚜ *!cekpremium* (cek masa aktif premium)
  ⚜ *!premiumlist* (cek daftar premium)

♻ Command Group Only :
  
  ⚜ *!groupinfo* 🆕
  ⚜ *!nsfwlist* 🔞
  ⚜ *!groupicon*
  ⚜ *!revoke* (merubah link grub)
  ⚜ *!autosticker [enable|disable]* 
  ⚜ *!mutegc [enable|disable]*
  ⚜ *!antilink [enable|disable]*
  ⚜ *!add 62858xxxxx*
  ⚜ *!kick @tagmember*
  ⚜ *!promote @tagmember*
  ⚜ *!demote @tagadmin*
  ⚜ *!mentionAll*
  ⚜ *!adminList*
  ⚜ *!ownerGroup*
  ⚜ *!leave*
  ⚜ *!linkGroup*
  ⚜ *!delete (replyChatBot)*
  ⚜ *!kickAll*
  ⚜ *!NSFW [enable|disable]*
  ⚜ *!antinsfw [enable|disable]*
  ⚜ *!welcome [enable|disable]*

♻ Command Downloader :

  ⚜ *!ytmp3 [linkYt]* 
  ⚜ *!ytmp4 [linkYt]* 
  ⚜ *!ytsearch [judul video]*
  ⚜ *!tomp3* [convert mp4 to mp3]
  ⚜ *!play [judul music]*
  ⚜ *!tomp3 [Convert Mp4 to Mp3]* 
  ⚜ *!twt [linkTwitter]* 
  ⚜ *!instastory [linkInstaStoryIG]* 
  ⚜ *!ig [linkInstagram]* 
  ⚜ *!fb [linkFb]* 
  ⚜ *!joox [linkJoox]*
  ⚜ *!tiktok [linkTiktok]*
  ⚜ *!tiktokpic [username]*
  ⚜ *!tiktoknowm [linkTiktok]*
  ⚜ *!moddroid [nama APK]*
  ⚜ *!happymod [nama APK]*
  ⚜ *!linedl [line sticker]*
  ~Command *Downloader* jangan digunakan terlebih dahulu 🙏🏼

♻ Command Sticker :

   ⚜ *!st2img*
   ⚜ *!stickernobg*
   ⚜ *!dogesticker*
   ⚜ *!sticker*
   ⚜ *!stickerGif*
   ⚜ *!emojisticker* (emoji)
   ⚜ *!stickerwm* (nama pack | nama author) 
   ⚜ *!takestick* (nama pack | nama author) 
   ⚜ *!stickermeme* (text atas | text bawah) 
   ⚜ *!ttp* (merubah text menjadi sticker)
   ⚜ *!ttg* (merubah text menjadi sticker GIF)
   ⚜ *!findsticker* (query) 

♻ Command Otaku :

   ⚜ *!randomneko*
   ⚜ *!nsfwlist* 🔞
   ⚜ *!wallpaper*
   ⚜ *!kusonime* (Judul Anime)
   ⚜ *!anitoki* (Judul Anime)
   ⚜ *!neonime* (Judul Anime)
   ⚜ *!anoboy* (Judul Anime)
   ⚜ *!kemono* 
   ⚜ *!manga* (Judul Manga) 
   ⚜ *!wait* 
   ⚜ *!sauce*  
   ⚜ *!waifu*

♻ Command Islami :

   ⚜ *!listsurah*
   ⚜ *!surah* (nomor surah)
   ⚜ *!jadwalShalat* (Daerah)
   ⚜ *!hadist* (kitab hadist | nomor hadist)
   ⚜ *!randomsurah*
   ⚜ *!tafsir* (nama surah ayat)
   ⚜ *!asmaulhusna* (Nomor asmaulhusna) 

♻ Command Edukasi :

   ⚜ *!wiki*
   ⚜ *!brainly* (pertanyaan) 🆕
   ⚜ *!creepyfact*
   ⚜ *!kbbi* (query)
   ⚜ *!resep* (makanan)
   ⚜ *!distance* (kota asal | kota tujuan)
   ⚜ *!math* (5*7)
   ⚜ *!motivasi*
   ⚜ *!kelpersegi* (sisi persegi)
   ⚜ *!luaspersegi* (sisi persegi)
   ⚜ *!kuadrat* (angka yang mau di kuadratkan)
   ⚜ *!kubik* (masukkan angka)
   ⚜ *!translate* (text | kode bhs)

♻ Command Random *IZUMI-BOT* :

   ⚜ *!editor* 🆕
   ⚜ *!reply* (Menirukan Pesan)
   ⚜ *!ssweb* (nekopoi.care) 🆕
   ⚜ *!google* (query) 🆕
   ⚜ *!jatidiri* (nama) 🆕
   ⚜ *!truthordare* (truth or dare)
   ⚜ *!citacita*
   ⚜ *!nsfwlist* 🔞
   ⚜ *!bapak* (kata kata)
   ⚜ *!puisi*
   ⚜ *!cerpen*
   ⚜ *!lirik* (query)
   ⚜ *!shortlink* (link)
   ⚜ *!igstalk* (username IG)
   ⚜ *!gsmarena* (model HP)
   ⚜ *!ytsearch* (query)
   ⚜ *!tts* ([kode bhs] query) 
   ⚜ *!mutualan* (Mencari teman chat random)
   ⚜ *!whois* (ip address)
   ⚜ *!play* (judul video) 
   ⚜ *!sms (pesan | nmr target)* 
   ⚜ *!toxic* 
   ⚜ *!alkitab* (nama injil)
   ⚜ *!cekongkir (kurir|asal|tujuan)* 
   ⚜ *!movie* (judul film) 
   ⚜ *!reminder* (example: 10s | aku mau kencan) 
   ⚜ *!img2url* 
   ⚜ *!infohoax* 
   ⚜ *!trending*
   ⚜ *!jobseek*
   ⚜ *!spamcall*
   ⚜ *!spamsms* (nmr target jumlah pesan)
   ⚜ *!email* (email target | subjek)
   ⚜ *!quotes*
   ⚜ *!genshininfo* (nama karakter)
   ⚜ *!coronavirus* (negara) 
   ⚜ *!pasangan* (nama | pasangan)
   ⚜ *!zodiak* (zodiak) 
   ⚜ *!nulis*
   ⚜ *!say* (halo apa kabar?)
   ⚜ *!weton [tgl | bulan | tahun]*
   ⚜ *!asupan [gambar cewe cewe idaman]*
   ⚜ *!sliding [query]*
   ⚜ *!caklontong*
   ⚜ *!hilih* (text) 
   ⚜ *!tebakgambar*
  
 👉🏼Kirim perintah *!readme* untuk mengetahui fungsi dan cara penggunaan perintah di atas, WAJIB BACA ‼️.

♻ Owner BOT Only :

   ⚜ *!menuowner*


⚠️ Kirim perintah *!snk* untuk membaca syarat & ketentuan yang berlaku
⚠️ Jangan melakukan spam command ‼️
⚠️ Telfon atau VC BOT langsung banned ‼️
⚠️ Gunakan bot dengan bijak ‼️
⚠️ Bot ini online 24 Jam selama tak terjadi error ‼️

  Total pengguna IZUMI-BOT: *${jumlahUser}*

 -----[ *POWERED BY IZUMI-BOT* ]-----
    `
}

exports.owner = () => {
    return `
-----🔰 OWNER 🔰-----
Halo Ownerku Sayang ヽ(・∀・)ﾉ!

1. *${prefix}bc*
Membuat broadcast.
Aliases: -
Usage: *${prefix}bc* <teks> 

2. *${prefix}clearall*
Menghapus semua chat di akun bot.
Aliases: -
Usage: *${prefix}clearall*

3. *${prefix}getses*
Mengambil screenshot sesi dari akun bot.
Aliases: -
Usage: *${prefix}getses*

4. *${prefix}ban*
Menambah/menghapus user yang diban.
Aliases: -
Usage: *${prefix}ban* add/del @user/62812xxxxxxxx

5. *${prefix}leaveall*
Keluar dari semua grup.
Aliases: -
Usage: *${prefix}leaveall*

6. *${prefix}eval*
Evaluate kode JavaScript.
Aliases: *ev*
Usage: *${prefix}eval*

7. *${prefix}shutdown*
Men-shutdown bot.
Aliases: -
Usage: *${prefix}shutdown*

8. *${prefix}premium*
Menambah/menghapus user premium.
*s* - detik
*m* - menit
*h* - jam
*d* - hari
Aliases: -
Usage: *${prefix}premium* add/del @user/62812xxxxxxxx 30d

9. *${prefix}setstatus*
Mengganti status about me.
Aliases: *setstats setstat*
Usage: *${prefix}status* teks

10. *${prefix}serial*
Cek pendaftaran akun via serial.
Aliases: -
Usage: *${prefix}serial* serial_user

11. *${prefix}exif*
Atur WM stiker bot.
Aliases: -
Usage: *${prefix}exif* pack_name | author_name

12. *${prefix}mute*
Mute semua user.
Aliases: -
Usage: Gunakan *${prefix}mute* untuk mute dan gunakan *${prefix}mute* kembali untuk unmute.

13. *${prefix}setname*
Mengganti username bot. Maksimal 25 huruf.
Aliases: -
Usage: *${prefix}name* username_baru

_Index of [9]_
    `
}


exports.menuDownloader = () => {
    return `
-----[ DOWNLOADER ]-----

1. *${prefix}facebook*
Download Facebook video.
Aliases: *fb*
Usage: *${prefix}facebook* link_video

2. *${prefix}ytmp3*
Download YouTube audio.
Aliases: -
Usage: *${prefix}ytmp3* link

3. *${prefix}ytmp4*
Download YouTube video.
Aliases: -
Usage: *${prefix}ytmp4* link

4. *${prefix}joox*
Mencari dan men-download lagu dari Joox.
Aliases: -
Usage: *${prefix}joox* judul_lagu

5. *${prefix}tiktok*
Mendownload video TikTok.
Aliases: -
Usage: *${prefix}tiktok* link_video

6. *${prefix}twitter*
Download Twitter media.
Aliases: *twt*
Usage: *${prefix}twiter* link

7. *${prefix}tiktokpic*
Download profile pic user
Aliases: -
Usage: *${prefix}tiktokpic* username

8. *${prefix}tiktoknowm*
Download video TikTok tanpa WM.
Aliases: *tktnowm*
Usage: *${prefix}tiktoknowm* link_video

9. *${prefix}moddroid*
Cari APK mod dari moddroid.
Aliases: -
Usage: *${prefix}moddroid* nama_APK

10. *${prefix}happymod*
Cari APK mod dari happymod.
Aliases: -
Usage: *${prefix}happymod* nama_APK

11. *${prefix}linedl*
Stiker Line downloader.
Aliases: -
Usage: *${prefix}linedl* link_stiker

_Index of [1]_
    `
}

exports.menuBot = () => {
    return `
-----[ BOT ]-----

1. *${prefix}rules*
Wajib baca.
Aliases: *rule*
Usage: *${prefix}rules*

2. *${prefix}menu*
Menampilkan commands yang tersedia.
Aliases: *help*
Usage: *${prefix}menu* angka_index

3. *${prefix}status*
Menampilkan status bot.
Aliases: *stats*
Usage: *${prefix}status*

4. *${prefix}listblock*
Cek nomor yang diblokir.
Aliases: -
Usage: *${prefix}listblock*

5. *${prefix}ping*
Cek speed bot.
Aliases: *p*
Usage: *${prefix}ping*

6. *${prefix}delete*
Hapus pesan dari bot.
Aliases: *del*
Usage: Reply pesan yang dihapus dengan caption *${prefix}delete*.

7. *${prefix}report*
Laporkan bug ke dev.
Aliases: -
Usage: *${prefix}report* pesan

8. *${prefix}tos*
Syarat dan ketentuan. (TOS)
Aliases: -
Usage: *${prefix}tos*

9. *${prefix}join*
Join grup via link.
Aliases: -
Usage: *${prefix}join* link_group

10. *${prefix}ownerbot*
Mengirim kontak owner.
Aliases: -
Usage: *${prefix}ownerbot*

11. *${prefix}getpic*
Mengirim foto profil user.
Aliases: -
Usage: *${prefix}getpic* @user/62812xxxxxxxx

12. *${prefix}premiumcheck*
Cek masa aktif premium.
Aliases: *cekpremium*
Usage: *${prefix}premiumcheck*

13. *${prefix}premiumlist*
Cek list user premium.
Aliases: *listpremium*
Usage: *${prefix}premiumlist*

_Index of [2]_
    `
}

exports.menuMisc = () => {
    return `
-----[ MISC ]-----

1. *${prefix}say*
Bot akan mengulang pesan mu.
Aliases: -
Usage: *${prefix}say* teks

2. *${prefix}lirik*
Mencari lirik lagu.
Aliases: -
Usage: *${prefix}lirik* judul_lagu

3. *${prefix}shortlink*
Membuat shortlink.
Aliases: -
Usage: *${prefix}shortlink* link

4. *${prefix}wikipedia*
Mengirim Wikipedia dari teks yang diberikan.
Aliases: *wiki*
Usage: *${prefix}wikipedia* teks

5. *${prefix}kbbi*
Mengirim definisi kata dari KBBI.
Aliases: -
Usage: *${prefix}kbbi* teks

6. *${prefix}igstalk*
Stalk akun Instagram.
Aliases: -
Usage: *${prefix}igstalk* username

7. *${prefix}gsmarena*
Mengirim info spesifikasi HP dari GSMArena.
Aliases: -
Usage: *${prefix}gsmarena* model_hp

8. *${prefix}receipt*
Mengirim resep makanan.
Aliases: *resep*
Usage: *${prefix}receipt* nama_makanan

9. *${prefix}ytsearch*
Mengirim hasil pencarian di YouTube.
Aliases: *yts*
Usage: *${prefix}ytsearch* query

10. *${prefix}tts*
Membuat Text to Speech. Kalian perlu kode bahasa setiap menggunakan, cek di sini https://id.wikipedia.org/wiki/Daftar_bahasa_menurut_ISO_639-2
Aliases: -
Usage: *${prefix}tts* kode_bahasa | teks

11. *${prefix}afk*
Set akun kamu ke mode AFK, aku akan mengirim pesan ke orang yang me-mention kamu.
Aliases: -
Usage: *${prefix}afk* alasan. Kirim pesan ke grup untuk menonaktifkan mode AFK.

12. *${prefix}distance*
Untuk mengetahui jarak dari kotamu ke kota yang kamu tuju
Aliases: -
Usage: *${prefix}distance* kota_asal | kota_tujuan

13. *${prefix}findsticker*
Untuk mencari sticker yang kamu cari
Aliases: *findstiker*
Usage: *${prefix}findsticker* teks

14. *${prefix}math*
Kalkulator.
* = Perkalian
+ = Pertambahan
- = Pengurangan
/ = Pembagian
Aliases: -
Usage: *${prefix}math* 12*12

15. *${prefix}listsurah*
Melihat list surah Al-Qur'an.
Aliases: -
Usage: *${prefix}listsurah*

16. *${prefix}surah*
Mengirim surah Al-Qur'an.
Aliases: -
Usage: *${prefix}surah* nomor_surah

17. *${prefix}js*
Mengetahui jadwal shalat di daerah kalian
Aliases: - 
Usage: *${prefix}js* namadaerah

18. *${prefix}mutual*
Dapatkan kontak WA random.
Aliases: -
Usage: *${prefix}mutual*

19. *${prefix}whois*
IP look-up.
Aliases: -
Usage: *${prefix}whois* ip_address

20. *${prefix}play*
Play audio dari YouTube.
Aliases: - 
Usage: *${prefix}play* judul_video

21. *${prefix}sms*
Mengirim SMS secara anonymous. (SMS gateway)
Aliases: -
Usage: *${prefix}sms* pesan | nomor_penerima

22. *${prefix}toxic*
Random toxic.
Aliases: -
Usage: *${prefix}toxic*

23. *${prefix}tafsir*
Tafsir ayat surah Al-Qur'an.
Aliases: -
Usage: *${prefix}tafsir* nama_surah  ayat

24. *${prefix}motivasi*
Kata-kata motivasi.
Aliases: -
Usage: *${prefix}motivasi*

25. *${prefix}linesticker*
Sticker Line terbaru.
Aliases: *linestiker*
Usage: *${prefix}linesticker*

26. *${prefix}alkitab*
Al-Kitab search.
Aliases: -
Usage: *${prefix}* nama_injil

27. *${prefix}cekongkir*
Cek ongkos kirim.
Aliases: -
Usage: *${prefix}ongkir* kurir | asal | tujuan

28. *${prefix}movie*
Cari film.
Aliases: -
Usage: *${prefix}movie* judul

28. *${prefix}reminder*
Pengingat. 
*s* - detik
*m* - menit
*h* - jam
*d* - hari
Aliases: -
Usage: *${prefix}reminder* 10s | pesan_pengingat

29. *${prefix}imagetourl*
Image uploader.
Aliases: *imgtourl*
Usage: Kirim gambar dengan caption *${prefix}imagetourl* atau reply gambar dengan caption *${prefix}imagetourl*.

30. *${prefix}infohoax*
Cek update info hoax.
Aliases: -
Usage: *${prefix}infohoax*

31. *${prefix}trending*
Cek trending di Twitter.
Aliases: -
Usage: *${prefix}trending*

32. *${prefix}jobseek*
Mencari info lowongan kerja.
Aliases: -
Usage: *${prefix}jobseek*

33. *${prefix}spamcall*
Spam call.
Aliases: -
Usage: *${prefix}spamcall* 812xxxxxxxx

34. *${prefix}spamsms*
Spam SMS.
Aliases: -
Usage: *${prefix}spamsms* 0812xxxxxxxx jumlah_pesan

35. *${prefix}email*
Mengirim email secara anonymous.
Aliases: -
Usage: *${prefix}email* email_target | subjek | pesan_email

36. *${prefix}quotes*
Random quotes bahasa indonesia.
Aliases: -
Usage: *${prefix}quotes*

37. *${prefix}genshininfo*
Kirim info karakter Genshin Impact.
Aliases: *genshin*
Usage: *${prefix}genshininfo* nama_karakter

38. *${prefix}translate*
Terjemahkan teks.
Aliases: *trans*
Usage: *${prefix}translate* teks | kode_bahasa

39. *${prefix}hadis*
Info hadis.
Aliases: -
Usage: *${prefix}hadis* kitab_hadis | nomor_hadis

40. *${prefix}asmaulhusna*
Asmaul husna.
Aliases: -
Usage: *${prefix}asmaulhusna* nomor_asmaulhusna

41. *${prefix}randomquran*
Kirim surah Al-Qur'an secara random.
Aliases: -
Usage: *${prefix}randomquran*

42. *${prefix}coronavirus*
Cek kasus COVID-19.
Aliases: *corona*
Usage: *${prefix}coronavirus* negara

43. *${prefix}tomp3*
Format video ke MP3.
Aliases: -
Usage: Kirim video dengan caption *${prefix}tomp3* atau reply video dengan caption *${prefix}tomp3*.

44. *${prefix}ttp*
Buat teks menjadi stiker.
Aliases: -
UsageL *${prefix}ttp* teks

_Index of [3]_
    `
}

exports.menuSticker = () => {
    return `
-----[ STICKER ]-----

1. *${prefix}sticker*
Membuat stiker dari gambar yang dikirim atau di-reply.
Aliases: *stiker*
Usage: Kirim gambar dengan caption *${prefix}sticker* atau reply gambar dengan caption *${prefix}sticker*.

2. *${prefix}stickergif*
Membuat stiker dari video MP4 atau GIF yang dikirim atau di-reply.
Aliases: *stikergif*
Usage: Kirim video/GIF dengan caption *${prefix}stickergif* atau reply video/GIF dengan caption *${prefix}stickergif*.

3. *${prefix}ttg*
Membuat stiker text to GIF.
Aliases: -
Usage: *${prefix}ttg* teks

4. *${prefix}stickertoimg*
Konversi stiker ke foto.
Aliases: *stikertoimg toimg*
Usage: Reply sticker dengan caption *${prefix}stickertoimg*.

5. *${prefix}emojisticker*
Konversi emoji ke stiker.
Aliases: *emojistiker*
Usage: *${prefix}emojisticker* emoji

6. *${prefix}stickerwm*
Buat stiker dengan WM.
Aliases: *stcwm*
Usage: Kirim gambar dengan caption *${prefix}stickerwm* pack_name | author_name atau reply gambar dengan caption *${prefix}stickerwm* pack_name | author_name.

7. *${prefix}stickermeme*
Buat sticker meme.
Aliases: *stcmeme*
Usage: Kirim gambar dengan caption *${prefix}stickermeme* teks_atas | teks_bawah atau reply gambar dengan caption *${prefix}stickermeme* teks_atas | teks_bawah.

8. *${prefix}takestick*
Merubah watermark sticker.
Aliases: -
Usage: Reply stiker dengan caption *${prefix}takestick* pack_name | author_name

_Index of [4]_
    `
}

exports.menuWeeaboo = () => {
    return `
-----[ WEEABOO ]-----

1. *${prefix}neko*
Mengirim foto neko girl.
Aliases: -
Usage: *${prefix}neko*

2. *${prefix}wallpaper*
Mengirim wallpaper anime.
Aliases: *wp*
Usage: *${prefix}wallpaper*

3. *${prefix}kemono*
Mengirim foto kemonomimi girl.
Aliases: -
Usage: *${prefix}kemono*

4. *${prefix}kusonime*
Mencari info anime dan link download batch di Kusonime.
Aliases: -
Usage: *${prefix}kusonime* judul_anime

5. *${prefix}komiku*
Mencari info manga dan link download di Komiku.
Aliases: -
Usage: *${prefix}komiku* judul_manga

6. *${prefix}wait*
Mencari source anime dari screenshot scene.
Aliases: -
Usage: Kirim screenshot dengan caption *${prefix}wait* atau reply screenshot dengan caption *${prefix}wait*.

7. *${prefix}source*
Mencari source dari panel doujin, ilustrasi, dan gambar yang berhubungan dengan anime.
Aliases: *sauce*
Usage: Kirim gambar dengan caption *${prefix}source* atau reply gambar dengan caption *${prefix}source*.

8. *${prefix}waifu*
Mengirim random foto waifu.
Aliases: -
Usage: *${prefix}waifu*

9. *${prefix}anitoki*
Cek update terbaru Anitoki.
Aliases: -
Usage: *${prefix}anitoki*

10. *${prefix}neonime*
Cek update terbaru Neonime.
Aliases: -
Usage: *${prefix}neonime*

11. *${prefix}anoboy*
Cek on-going anime dari Anoboy.
Aliases: -
Usage: *${prefix}anoboy*

_Index of [5]_
    `
}

exports.menuFun = () => {
    return `
-----[ FUN ]-----

1. *${prefix}hartatahta*
Membuat gambar Harta Tahta Nama.
Aliases: -
Usage: *${prefix}hartatahta* nama

2. *${prefix}partner*
Weton jodoh.
Aliases: *pasangan*
Usage: *${prefix}partner* nama | pasangan

3. *${prefix}zodiac*
Ramalan zodiak Mingguan.
Aliases: *zodiak*
Usage: *${prefix}zodiac* zodiak

4. *${prefix}write*
Membuat catatan tulisan di buku.
Aliases: *nulis*
Usage: *${prefix}write* teks

5. *${prefix}glitchtext*
Membuat gambar teks glitch.
Aliases: *glitext*
Usage: *${prefix}glitchtext* teks1 | teks2

6. *${prefix}simi*
Chat SimiSimi.
Aliases: -
Usage: *${prefix}simi* teks

7. *${prefix}blackpink*
Membuat teks dengan style logo Blackpink.
Aliases: -
Usage: *${prefix}blackpink* teks

8. *${prefix}phmaker*
Membuat teks dengan style logo Pornhub.
Aliases: -
Usage: *${prefix}phmaker* teks_kiri | teks_kanan

9. *${prefix}galaxy*
Membuat gambar teks galaxy.
Aliases: -
Usage: *${prefix}galaxy* teks

10. *${prefix}tod*
Bermain truth or dare.
Aliases: -
Usage: *${prefix}tod*

11. *${prefix}weton*
Kirim ramalan weton.
Aliases: -
Usage: *${prefix}weton* tanggal | bulan | tahun

12. *${prefix}triggered*
Membuat efek triggered.
Aliases: -
Usage: Kirim gambar dengan caption *${prefix}triggered* atau reply pesan orang dengan *${prefix}triggered*.

13. *${prefix}kiss*
Kiss someone ( ͡° ͜ʖ ͡°).
Aliases: -
Usage: Kirim gambar dengan caption *${prefix}kiss* atau reply gambar dengan *${prefix}kiss*.

14. *${prefix}asupan*
Asupan video cewek-cewek.
Aliases: -
Usage: *${prefix}asupan*

15. *${prefix}citacita*
Meme cita-cita.
Aliases: -
Usage: *${prefix}citacita*

16. *${prefix}phcomment*
Membuat capton ala PH comment.
Aliases: -
Usage: *${prefix}phcomment* username | teks

17. *${prefix}ffbanner*
Membuat banner Free Fire.
Aliases: -
Usage: *${prefix}ffbanner* teks1 | teks2

18. *${prefix}fflogo*
Membuat logo karakter Free Fire.
Aliases: -
Usage: *${prefix}fflogo* teks1 | teks2

19. *${prefix}neontext*
Membuat gambar neon teks.
Aliases: *neon*
Usage: *${prefix}neontext* teks_atas | teks_tengah | teks_bawah

20. *${prefix}firemaker*
Membuat gambar teks fire.
Aliases: -
Usage: *${prefix}firemaker* teks

21. *${prefix}mlmaker*
Membuat gambar karakter hero ML dengan teks.
Aliases: -
Usage: *${prefix}mlmaker* nama_hero | teks

22. *${prefix}balloonmaker*
Membuat gambar couple balloon.
Aliases: *blmaker*
Usage: *${prefix}balloonmaker* nama1 | nama2

23. *${prefix}sliding*
Membuat GIF sliding text.
Aliases: -
Usage: *${prefix}sliding* teks

24. *${prefix}wasted*
Membuat gambar wasted.
Aliases: -
Usage: Upload foto dengan caption *${prefix}wasted*

25. *${prefix}caklontong*
Bermain kuis caklontong.
Aliases: -
Usage: *${prefix}caklontong*

26. *${prefix}hilih*
Replace beberapa huruf menjadi i.
Aliases: -
Usage: *${prefix}hilih* teks

27. *${prefix}tebakgambar*
Bermain kuis tebak gambar.
Aliases: -
Usage: *${prefix}tebakgambar*

_Index of [6]_
    `
}

exports.menuModeration = () => {
    return `
-----[ MODERATION ]-----

1. *${prefix}add*
Menambah user ke dalam group.
Aliases: -
Usage: *${prefix}add* 628xxxxxxxxxx

2. *${prefix}kick*
Mengeluarkan member dari grup.
Aliases: -
Usage: *${prefix}kick* @member1

3. *${prefix}promote*
Promote member menjadi admin.
Aliases: -
Usage: *${prefix}promote* @member1

4. *${prefix}demote*
Demote member dari admin.
Aliases: -
Usage: *${prefix}demote* @member1

5. *${prefix}leave*
Bot akan meninggalkan grup.
Aliases: -
Usage: *${prefix}leave*

6. *${prefix}everyone*
Mention semua member group.
Aliases: -
Usage: *${prefix}everyone*

7. *${prefix}nsfw*
Mematikan/menyalakan mode NSFW.
Aliases: -
Usage: *${prefix}nsfw* enable/disable

8. *${prefix}groupicon*
Mengganti icon grup.
Aliases: -
Usage: Kirim gambar dengan caption *${prefix}groupicon* atau reply gambar dengan caption *${prefix}groupicon*.

9. *${prefix}antilink*
Mematikan/menyalakan fitur anti-group link.
Aliases: -
Usage: *${prefix}antilink* enable/disable

10. *${prefix}welcome*
Mematikan/menyalakan fitur welcome di grup agar menyambut setiap kedatangan member.
Aliases: -
Usage: *${prefix}welcome* enable/disable

11. *${prefix}autosticker*
Mematikan/menyalakan fitur auto-stiker. Setiap foto yang dikirim akan selalu diubah ke stiker.
Aliases: *autostiker autostik*
Usage: *${prefix}autostiker* enable/disable

12. *${prefix}antinsfw*
Mematikan/menyalakan fitur anti-NSFW link.
Aliases: -
Usage: *${prefix}antinsfw* enable/disable

13. *${prefix}mutegc*
Set group hanya admin yang bisa mengirim pesan.
Aliases: -
Usage: *${prefix}mutegc* enabled/disable

_Index of [7]_
    `
}

exports.menuNsfw = () => {
    return `
-----[ NSFW ]-----

1. *${prefix}lewds*
Mengirim pict anime lewd.
Aliases: *lewd*
Usage: *${prefix}lewds*

2. *${prefix}multilewds*
Mengirim up to 5 anime lewd pics. (PREMIUM ONLY)
Aliases: *multilewds multilewd mlewd mlewds*
Usage: *${prefix}multilewds*

3. *${prefix}nhentai*
Mengirim info doujinshi dari nHentai.
Aliases: *nh*
Usage: *${prefix}nhentai* kode

4. *${prefix}nhdl*
Mendownload doujin dari nHentai sebagai file PDF. (PREMIUM ONLY)
Aliases: -
Usage: *${prefix}nhdl* kode

5. *${prefix}nekopoi*
Mengirim video link Nekopoi terbaru.
Aliases: -
Usage: *${prefix}nekopoi*

6. *${prefix}multifetish*
Mengirim up to 5 fetish pics. (PREMIUM ONLY)
Aliases: *mfetish*
Usage: *${prefix}multifetish* <armpits/feets/thighs/ass/boobs/belly/sideboobs/ahegao>

7. *${prefix}waifu18*
Mengirim random foto waifu NSFW.
Aliases: -
Usage: *${prefix}waifu18*

8. *${prefix}fetish*
Mengirim fetish pics.
Aliases: -
Usage: *${prefix}fetish* armpits/feets/thighs/ass/boobs/belly/sideboobs/ahegao

9. *${prefix}phdl*
Download video dari Pornhub.
Aliases: -
Usage *${prefix}phdl* link

10. *${prefix}yuri*
Mengirim random foto lewd yuri.
Aliases: -
Usage: *${prefix}yuri*

11. *${prefix}lewdavatar*
Mengirim random avatar lewd.
Aliases: -
Usage: *${prefix}lewdavatar*

12. *${prefix}femdom*
Mengirim random foto ero femdom.
Aliases: -
Usage: *${prefix}femdom*

13. *${prefix}nhsearch*
nHentai search.
Aliases: -
Usage: *${prefix}nhsearch* query

14. *${prefix}nekosearch*
Nekopoi search.
Aliases: -
Usage: *${prefix}nekosearch* query

15. *${prefix}cersex*
Random cerita sex.
Aliases: -
Usage: *${prefix}cersex*

_Index of [8]_
    `
}

exports.menuOwner = () => {
    return `
-----🔰 OWNER 🔰-----
Halo Ownerku Sayang ヽ(・∀・)ﾉ!

1. *${prefix}bc*
Membuat broadcast.
Aliases: -
Usage: *${prefix}bc* <teks> 

2. *${prefix}clearall*
Menghapus semua chat di akun bot.
Aliases: -
Usage: *${prefix}clearall*

3. *${prefix}getses*
Mengambil screenshot sesi dari akun bot.
Aliases: -
Usage: *${prefix}getses*

4. *${prefix}ban*
Menambah/menghapus user yang diban.
Aliases: -
Usage: *${prefix}ban* add/del @user/62812xxxxxxxx

5. *${prefix}leaveall*
Keluar dari semua grup.
Aliases: -
Usage: *${prefix}leaveall*

6. *${prefix}eval*
Evaluate kode JavaScript.
Aliases: *ev*
Usage: *${prefix}eval*

7. *${prefix}shutdown*
Men-shutdown bot.
Aliases: -
Usage: *${prefix}shutdown*

8. *${prefix}premium*
Menambah/menghapus user premium.
*s* - detik
*m* - menit
*h* - jam
*d* - hari
Aliases: -
Usage: *${prefix}premium* add/del @user/62812xxxxxxxx 30d

9. *${prefix}setstatus*
Mengganti status about me.
Aliases: *setstats setstat*
Usage: *${prefix}status* teks

10. *${prefix}serial*
Cek pendaftaran akun via serial.
Aliases: -
Usage: *${prefix}serial* serial_user

11. *${prefix}exif*
Atur WM stiker bot.
Aliases: -
Usage: *${prefix}exif* pack_name | author_name

12. *${prefix}mute*
Mute semua user.
Aliases: -
Usage: Gunakan *${prefix}mute* untuk mute dan gunakan *${prefix}mute* kembali untuk unmute.

13. *${prefix}setname*
Mengganti username bot. Maksimal 25 huruf.
Aliases: -
Usage: *${prefix}name* username_baru

_Index of [9]_
    `
}

exports.menuLeveling = () => {
    return `
-----🔰 LEVELING 🔰-----

1. *${prefix}level*
Untuk melihat level kamu.
Aliases: -
Usage: *${prefix}level*

2. *${prefix}leaderboard*
Untuk melihat leaderboard.
Aliaases: -
Usage: *${prefix}leaderboard*

_Index of [10]_
    `
}

exports.rules = () => {
    return `
-----🔰 RULES 🔰-----

1. Jangan spam bot. 
Sanksi: *WARN/SOFT BLOCK*

2. Jangan telepon bot.
Sanksi: *SOFT BLOCK*

3. Jangan mengeksploitasi bot.
Sanksi: *PERMANENT BLOCK*

Jika sudah dipahami rules-nya, silakan ketik *${prefix}menu* untuk memulai!

Jika ada pertanyaan silahkan chat:
wa.me/6287833474586 (Owner)
    `
}

// Dimohon untuk owner/hoster jangan mengedit ini, terima kasih.
exports.tos = (ownerNumber) => {
    return `
-----🔰 TERMS OF SERVICE 🔰-----

Bot ini merupakan ai responder berbasis nodeJS dan JS
Source code / bot ini merupakan program open-source (Pribadi) yang ditulis menggunakan Javascript, dilarang keras untuk menggunakan, menyalin, memodifikasi, menggabungkan, menerbitkan, mendistribusikan, mensublisensikan, dan atau menjual salinan Source Code ini tanpa seizin owner bot.
1. Teks dan nama pengguna WhatsApp anda akan kami simpan di dalam server selama bot aktif
2. Data anda akan di hapus ketika bot Offline
3. Kami tidak menyimpan gambar, video, file, audio, dan dokumen yang anda kirim
4. Kami tidak akan pernah meminta anda untuk memberikan informasi pribadi
5. Jika menemukan Bug/Error silahkan langsung lapor ke Owner bot (https://wa.me/6287833474586)
6. Apapun yang anda perintah pada bot ini, KAMI TIDAK AKAN BERTANGGUNG JAWAB!
7. Jangan sekali kali mencoba untuk menelpon BOT jika tak ingin di banned oleh BOT
8. Untuk donasi bisa melalui command *!donasi* atau melalui https://saweria.co/dhanifitrah5


    `
}

exports.editor = () => {
    return `
♻️ Command Editor Berkelas :

   ⚜ *!logo* 🆕
   ⚜ *!avatarnowm* 🆕
   ⚜ *!avatar* 🆕
   ⚜ *!sliding* (text) 🆕
   ⚜ *!darkneon* (text) 🆕
   ⚜ *!coffe* (text) 🆕
   ⚜ *!naruto* (text) 🆕
   ⚜ *!hartatahta* (text)
   ⚜ *!glitchtext* (text1 | text2)
   ⚜ *!avatarwolf* (text1 | text2)
   ⚜ *!blackpink* (text)
   ⚜ *!pornhublogo* ( text1 | text2 )
   ⚜ *!galaxy* (text)
   ⚜ *!ffbanner* (username | text) 
   ⚜ *!fflogo* (karakter | text) 
   ⚜ *!neontext* (text)
   ⚜ *!firemaker* (text)
   ⚜ *!mlmaker* (hero | text) 
   ⚜ *!balloonmaker* (text)
   ⚜ *!wasted* (upload foto dengan caption !wasted)
   ⚜ *!phcomment* (username | text)
   ⚜ *!kiss* (upload foto dengan caption !kiss)


    `
}

exports.nsfww = () => {
    return `
🔞 Command NSFW :

   ⚜ *!xnxx* (Judul Bokep)🔞
   ⚜ *!trap*🔞
   ⚜ *!furry*🔞
   ⚜ *!lewd*🔞
   ⚜ *!nh* (Kode Nuclear)🔞
   ⚜ *!nhdl* (Kode Nuclear)🔞
   ⚜ *!nekopoi*🔞
   ⚜ *!waifu18* 🔞
   ⚜ *!fetish armpits*🔞
   ⚜ *!fetish feets*🔞
   ⚜ *!fetish thighs*🔞
   ⚜ *!fetish ass*🔞
   ⚜ *!fetish boobs*🔞
   ⚜ *!fetish belly*🔞
   ⚜ *!fetish sideboobs*🔞
   ⚜ *!fetish ahegao*🔞
   ⚜ *!phdl* (LinkPornHub) 🔞
   ⚜ *!yuri*🔞
   ⚜ *!lewdavatar*🔞
   ⚜ *!femdom*🔞
   ⚜ *!nhsearch* (Judul Douj*n)🔞
   ⚜ *!nekosearh* (Judul Hent*i)🔞
   ⚜ *!cersex*🔞


    `
}