// S C R I P T  O R I  B Y  @BochilGaming π­
// M A D E  B Y  FANGZπ±  
// Credits, jangan dihapus atau diubah!

// - - THANKS TO - -
// β’ Allah SWT
// β’ Nurutomo
// β’ Bochilgaming
// β’ Rominaru
// β’ Kannachann
// β’ The.Sad.Boy01
// β’ FangzBot
// β’ Rasel comel
// β’ Xtreshe (Beban)
// β’ Dll

//[!] Jangan Dihapus, mending ditambahin 

import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import moment from 'moment-timezone'

/*============= WAKTU =============*/
let wibh = moment.tz('Asia/Jakarta').format('HH')
    let wibm = moment.tz('Asia/Jakarta').format('mm')
    let wibs = moment.tz('Asia/Jakarta').format('ss')
    let wktuwib = `${wibh} H ${wibm} M ${wibs} S`
    
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
      
    
/*============== SOCIAL ==============*/

// kalo ga punya ketik "-" atau biarin aja biar ada creditsnya :v
global.sig = 'https://instagram.com/andhycarsrofficial'
global.sgh = 'https://github.com/andhyca-offc'
global.sgc = 'https://chat.whatsapp.com/DTtOcmrCAkKFrVZJD6jb6M'
global.sdc = '-'
global.snh = '-'

/*============== PAYMENT ==============*/
global.pdana = '085872761910'
global.povo = '-'
global.pgopay = '085872761910'
global.ppulsa = '085872761910'
global.ppulsa2 = '085872761910'
global.psaweria = '-'

/*============== NOMOR ==============*/
global.nomorbot = '62895330584590'
global.nomorown = '6285872761910','6285794408499','6287829536442'
global.namebot = 'γ ππ§ππ‘π²ππππ¨π­π³-ππΰ½Ό γ'
global.nameown = 'α΄Ήα΄Ώα­ πΈππππͺπππΎπππ«ΰ½Ό ΓαΦΝΓ','βοΈποΈβοΈποΈ β’ π΄ππβπ¦ππα΅α΅βΏαΆ»','ππππππ±πΎπ-πΌπ'


/*============== STAFF ==============*/
global.owner = [
  ['62895330584590', 'ππ§ππ‘π²ππππ¨π­π³-ππΰ½Ό', true],
  ['6287829536442', 'ππππππ±πΎπ-πΌπ', true],
  ['6285794408499', 'βοΈποΈβοΈποΈ β’ π΄ππβπ¦ππα΅α΅βΏαΆ»', true],
  ['6285872761910', 'α΄Ήα΄Ώα­ πΈππππͺπππΎπππ«ΰ½Ό ΓαΦΝΓ', true]
  // [number, dia creator/owner?, dia developer?]
] // Put your number here
global.mods = ['62895330584590','6285872761910','6285794408499','6287829536442'] // Want some help?
global.prems = ['62895330584590','6285872761910','6285794408499','6287829536442'] // Premium user bukan disini nambahinnya, ketik .addprem @user 10


/*============== API ==============*/
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  rey: 'https://server-api-rey.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  lol: 'https://api.lolhuman.xyz',
  dhnjing: 'https://dhnjing.xyz',
  neoxr: 'https://neoxr-api.herokuapp.com',
  zeks: 'https://api.zeks.me',
  pencarikode: 'https://pencarikode.xyz',
  ana: 'https://anabotofc.herokuapp.com/',
  amel: 'https://melcanz.com',
  hardianto: 'https://hardianto.xyz',
  botstyle: 'https://botstyle-api.herokuapp.com',
  adiisus: 'https://adiixyzapi.herokuapp.com',
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  kanx: 'https://kannxapi.herokuapp.com/'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'a7112460aaec989a',
  'https://anabotofc.herokuapp.com/': 'AnaBot',
  'https://api.lolhuman.xyz': 'c37b848002a90a0acd119b25',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.me': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://melcanz.com': 'gedFijw7',
  'https://neoxr-api.herokuapp.com': 'yntkts',
  'https://server-api-rey.herokuapp.com': 'apirey',
  'https://botstyle-api.herokuapp.com': 'Fa2GhFnr',
  'https://hardianto.xyz': 'hardianto',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll'
}
// Kata APIKEY itu isi dengan apikey lu sendiri, dengan beli ke website itu

/*============== WATERMARK ==============*/
//GANTI SETERAH MU
global.wm = '                γ ππ§ππ‘π²ππππ¨π­π³-ππΰ½Ό γβ© γ' //Main Watermark
global.wm2 = 'κ·οΈΆκ·κ₯κ· β§βΛ κ°ΰΈΛππ§ππ‘π²ππππ¨π­π³-ππΰ½ΌΛΰΈ κ± β§βΛκ·οΈΆκ·κ₯κ·'
global.wm3 = 'β«Ήβ«Ί Fangz ππ’π§'
global.botdate = `β«Ήβ«Ί π§πΆπΊπ² π¦π²πΏππ²πΏ : ${wktuwib}\nβ«Ήβ«Ί ππ?ππ² ππ²πΏππ²πΏ: ${week} ${date}`
global.bottime = `π§ π π  π : ${wktuwib}`
global.titlebot = 'γ ππ§ππ‘π²ππππ¨π­π³-ππΰ½Ό | Β© α΄Ήα΄Ώα­ πΈππππͺπππΎπππ«ΰ½Ό ΓαΦΝΓ γ'
global.author = 'global.wm'


/*============== LOGO ==============*/
// INI JUGA GANTI SETERAH MU
global.thumb = 'https://telegra.ph/file/935b88bd02274c6bfdb7c.jpg' //Main Thumbnail
global.thumb2 = 'https://telegra.ph/file/935b88bd02274c6bfdb7c.jpg'
global.thumbbc = 'https://telegra.ph/file/935b88bd02274c6bfdb7c.jpg' //For broadcast
global.giflogo = 'https://telegra.ph/file/a46ab7fa39338b1f54d5a.mp4'

global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text='

/*============== TEXT ==============*/
global.wait = '```γβ°β°β°β±β±β±β±β±β±β±γLoading...```'
global.eror = '```γβ οΈγServer Sedang Erorr```'

/*=========== TYPE DOCUMENT ===========*/
global.dpptx = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.ddocx = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.dxlsx = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.dpdf = 'application/pdf'
global.drtf = 'text/rtf'

global.thumbdoc = 'https://telegra.ph/file/935b88bd02274c6bfdb7c.jpg'

/*=========== FAKE SIZE ===========*/
global.fsizedoc = '99999999999999' // default 10TB
global.fpagedoc = '999'

/*=========== HIASAN ===========*/
// DEFAULT MENU
global.dmenut = 'βββββββ©' //top
global.dmenub = 'ββ’' //body
global.dmenub2 = 'β' //body for info cmd on Default menu
global.dmenuf = 'ββββββββββββ¦' //footer

// COMMAND MENU
global.dashmenu = 'ββββββββββ *DASHBOARD* ββββββββββ'
global.cmenut = 'βββββββγ'                       //top
global.cmenuh = 'γββββββ'                        //header
global.cmenub = 'ββ¦ '                            //body
global.cmenuf = 'ββββββββββββΰΉ\n'                //footer
global.cmenua = '\nβ ββββββββββββββββββββββββββββββββ β\n     ' //after
global.pmenus = 'β'                              //pembatas menu selector

global.htki = 'ββββββγ' // Hiasan Titile (KIRI)
global.htka = 'γββββββ' // Hiasan Title  (KANAN)
global.lopr = 'β' //LOGO PREMIUM ON MENU.JS
global.lolm = 'β' //LOGO FREE ON MENU.JS
global.htjava = 'β«Ήβ«Ί'    //hiasan Doang :v
global.hsquere = ['βΆ','β','β«Ήβ«Ί']

/*============== STICKER WM ==============*/
global.stickpack = '.'
global.stickauth = `βοΈ\nπ\nπ§\nπ\nπ‘\nπ²\nπ\nπ\n-\nπ\nπ’\nπ§\nβ¦\n\nβ«Ήβ«Ί Whatsapp BOT\nwa.me/${global.nomorbot}`

global.multiplier = 38 // The higher, The harder levelup

/*============== EMOJI ==============*/
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      level: 'π',
      limit: 'π«',
      health: 'β€οΈ',
      exp: 'β¨',
      money: 'πΉ',
      bank: 'π¦',
      potion: 'π₯€',
      diamond: 'π',
      common: 'π¦',
      uncommon: 'ποΈ',
      mythic: 'π',
      legendary: 'ποΈ',
      superior: 'πΌ',
      pet: 'π',
      trash: 'π',
      armor: 'π₯Ό',
      sword: 'βοΈ',
      pickaxe: 'βοΈ',
      fishingrod: 'π£',
      wood: 'πͺ΅',
      rock: 'πͺ¨',
      string: 'πΈοΈ',
      horse: 'π΄',
      cat: 'π±',
      dog: 'πΆ',
      fox: 'π¦',
      petFood: 'π',
      iron: 'βοΈ',
      gold: 'πͺ',
      emerald: 'βοΈ',
      upgrader: 'π§°'
      
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

//------ JANGAN DIUBAH -----
let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
