/*CMD
  command: @
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

function ValidMen(d) {
  if (!d) {
    return ValidName()
  }
  return d
}
//function variable
function ReplaceTextToVariable(text) {
var info = Bot.getProperty("user", { list: {} })
var data = info.list[user.telegramid]
var global = info.list["global"]
  if (!global || !data) {
    return text
  }
  var reflink = "https://t.me/" + bot.name + "?start=" + user.telegramid
  var Lang = {
    botname: bot.name,
    first_name: user.first_name,
    username: ValidName(),
    telegramid: user.telegramid,
    mention: ValidMen(MentionName()),
    reflink: reflink,
    balance: data.user.balance.toFixed(10),
    profit: data.user.profit.toFixed(10),
    invested: data.user.invested.toFixed(10),
    affiliate: data.user.affiliate.toFixed(10),
    withdraw: data.user.withdraw.toFixed(10),
    GlobalDays: global.days,
    GlobalUsers: global.users,
    GlobalWithdrawals: global.withdrawals.toFixed(7),
    GlobalDeposits: global.deposits.toFixed(7)
  }
  var newText = text.replace(/%([a-z_]+)%/gi, function(fullmatch, key) {
    return Lang[key] ? Lang[key] : fullmatch
  })
  if (newText) {
    var goText = newText
  } else {
    var goText = text
  }
  return goText
}
//function refid
function GetRefLinked(refid) {
  if (refid) {
    return refid
  }
  return 2110220740
}
//API SEND MESSAGE
function ApiRequest(data) {
  return Api.sendMessage(data)
}
//gateway
var url =
  "https://api.bots.business/v1/bots/725421/new-webhook?&command=connect&public_user_token=919138ec0afd896221a03ef2bd840a27&user_id=8785339"
function CryptoAdGateWayBot(data) {
  HTTP.post({
    url: url,
    body: data
  })
}
//function
function canRun(time, invest) {
  if (invest) {
    var investTime = invest
  } else {
    var investTime = 24
  }
  var last_run_at = time
  var minutes = (Date.now() - last_run_at) / 1000 / 60
  var minutes_in_day = investTime * 60
  var next = minutes_in_day - minutes
  var wait_hours = Math.floor(next / 60)

  next -= wait_hours * 60
  if (minutes < minutes_in_day) {
    //investment not done yet
    return
  }
  //investment done
  return true
}
//function get button
function GetButton(name) {
var admin_info = Bot.getProperty("admin", { list: {} })
  var admin = admin_info.list["admin"].admin == user.telegramid
  if (name == "info") {
    if (admin) {
      return [
        [{ text: "📥 My Investments", callback_data: "/My_Investments" }],
        [{ text: "📤 My Withdrawals", callback_data: "/My_withdrawals" }],
        [{ text: "📝 Edit Text", callback_data: "/edxxxcc02" }]
      ]
    }
    return [
      [{ text: "📥 My Investments", callback_data: "/My_Investments" }],
      [{ text: "📤 My Withdrawals", callback_data: "/My_withdrawals" }]
    ]
  }
  //
}
