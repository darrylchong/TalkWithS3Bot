/*CMD
  command: /login
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 🧔 admin
  answer: Please input password. Password is "123"
  keyboard: 
  aliases: 
CMD*/

msg = "Access denied. /login"

if(message=="s3"){
  Bot.setProperty("admin_chat", chat.chatid, "string")
  msg = "You are an admin now. Please wait messages from users";
}

Bot.sendMessage(msg);

