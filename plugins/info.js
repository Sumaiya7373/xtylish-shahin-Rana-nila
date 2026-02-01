const os = require('os');

module.exports = {
  config: {
    name: 'info',
    aliases: ['about', 'admininfo', 'serverinfo'],
    permission: 0,
    prefix: 'both',
    categorie: 'Utilities',
    credit: 'Developed by Shahin Rana',
    usages: [`${global.config.PREFIX}info - Show admin and server information.`],
  },
  start: async ({ event, api, message }) => {
    try {
      const uptimeSeconds = process.uptime();
      const uptime = new Date(uptimeSeconds * 1000).toISOString().substr(11, 8);

      const adminListText =
        global.config.admin.length > 0
          ? global.config.admin
              .map((id, i) => `${i + 1}. @${id.split('@')[0]}`)
              .join('\n')
          : 'No admins found.';

      const infoMessage = `
--------------------------------------------
𝐍𝐚𝐦𝐞           : 𝐒𝐡𝐚𝐡𝐢𝐧 𝐑𝐚𝐧𝐚
𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤       : 𝐒𝐢𝐥𝐞𝐧𝐭 𝐤𝐢𝐥𝐥𝐞𝐫 𝐑𝐚𝐧𝐚
𝐑𝐞𝐥𝐢𝐠𝐢𝐨𝐧       : 𝐈𝐬𝐥𝐚𝐦
𝐏𝐞𝐫𝐦𝐚𝐧𝐞𝐧𝐭 𝐀𝐝𝐝𝐫𝐞𝐬𝐬: 𝐒𝐲𝐥𝐡𝐞𝐭, 𝐃𝐡𝐚𝐤𝐚
𝐂𝐮𝐫𝐫𝐞𝐧𝐭 𝐀𝐝𝐝𝐫𝐞𝐬𝐬 : 𝐒𝐲𝐥𝐡𝐞𝐭, 𝐉𝐨𝐤𝐢𝐠𝐨𝐧𝐣
𝐆𝐞𝐧𝐝𝐞𝐫       : 𝐌𝐚𝐥𝐞
𝐀𝐠𝐞           : 𝟏𝟖+
𝐑𝐞𝐥𝐚𝐭𝐢𝐨𝐧𝐬𝐡𝐢𝐩 : 𝐌𝐢𝐧𝐠𝐥𝐞
𝐖𝐨𝐫𝐤         : 𝐒𝐭𝐮𝐝𝐞𝐧𝐭
𝐆𝐦𝐚𝐢𝐥       : Shahinrana5070@gmail.com
𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩   : wa.me/+8801793447339


--------------------------------------------
\`\`\`
🖥️ Server Info:
• Platform       : ${os.platform()}
• CPU            : ${os.cpus()[0].model}
• Node.js Version: ${process.version}
• Uptime         : ${uptime}
• Total Memory   : ${(os.totalmem() / (1024 ** 3)).toFixed(2)} GB
• Free Memory    : ${(os.freemem() / (1024 ** 3)).toFixed(2)} GB
\`\`\``;

      await api.sendMessage(
            event.threadId,
            { image: { url: "https://i.postimg.cc/2y9bTqv6/retouch-2025071913433217.jpg" }, caption: infoMessage || '' },
            { quoted: event.message }
          );;
    } catch (error) {
      console.error(error);
      await api.sendMessage(event.threadId, '❌ An error occurred while fetching info.', { quoted: event.message });
    }
  },
};
