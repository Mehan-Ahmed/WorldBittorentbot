/*CMD
  command: /wdprivate
  help: 
  need_reply: true
  auto_retry_time: 
  folder: WITHDRAW
  answer: 
  keyboard: 
  aliases: 
CMD*/

var uses = Bot.getProperty("user", { list: {} })
var admin_info = Bot.getProperty("admin", { list: {} })
var json_admin = admin_info.list["admin"]
var data = uses.list[user.telegramid]
var bal = data.user.balance
var min = json_admin.withdraw.minimum
var cur = json_admin.currency
var amount = message * 1
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}

if (!isNumeric(message)) {
  Bot.sendMessage("❌ Send a value over " + min + ", and under (or max) " + bal)
} else {
  if ((bal < amount) | (amount < min)) {
    Bot.sendMessage(
      "❌ Send a value over " + min + ", and under (or max) " + bal
    )
    return
  }
  if (bal >= min && amount >= min && amount <= bal) {
    //go
    Bot.sendMessage("✏️ *Send now your " + cur + " Address*")
    Bot.run({ command: "/wdprivate200", options: { amount: amount } })
  } else {
    Bot.sendMessage(
      "*❌ You have to own at least " +
        min +
        " " +
        cur +
        " in your wallet to withdraw!*"
    )
  }
}

