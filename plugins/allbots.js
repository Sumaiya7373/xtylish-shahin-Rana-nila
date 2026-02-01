// dont change any line this file

module.exports = {
  config: {
    name: "allbots",
    aliases: ["bots", "mybots", "links"],
    permission: 0,
    prefix: true,
    description: "Send all my bot links and tutorials",
    categories: "Utility",
    usages: [".allbots"],
    credit: "Developed by Shahin Rana"
  },

  start: async ({ api, event }) => {
    const { threadId, message } = event;

    const myNumber = "8801793447339";
    const msg = `🌟 *SHAHIN BOT COLLECTION* 🌟

📱 *WhatsApp Bot*
Link: https://github.com/Shahin-Rana-420/Shahin-WHATSAPP-BOT
Tutorial: https://youtu.be/hrO_v3z-Lq8

💬 *Messenger Bot*
Link: https://github.com/Shahin-Rana-07/Shahin-Bot
Tutorial: https://youtu.be/DrQw3j56Llk

🤖 *Telegram Bot*
Link: https://github.com/Shahin-Rana-420/Shahin-TELEGRAM-BOT
Tutorial: https://youtu.be/FyjUL6MwaXs

🛠️ *Support Channel*
Link: https://chat.whatsapp.com/KuSent8x2rIIl93CD1aKBl?mode=ems_copy_c

📞 *Contact Me*: +${myNumber}`;

    await api.sendMessage(threadId, { text: msg }, { quoted: message });
  }
};
