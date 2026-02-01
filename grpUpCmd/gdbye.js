module.exports = {
  event: 'remove',
  handle: async ({ api, event }) => {
    const removedMembers = event.participants;

    for (const member of removedMembers) {
      const username = member.split('@')[0];

      await api.sendMessage(event.id, {
        text:
`╔═══❖•ೋ°°ೋ•❖═══╗
👋 *Goodbye @${username}*
╚═══❖•ೋ°°ೋ•❖═══╝

🤗 আমাদের ছোট্ট পরিবার তোমাকে মিস করবে!

— ☕ * *✎ᝰ.⎯꯭̽𝐒𝐡𝐚𝐡𝐢𝐧 𝐑𝐚𝐧𝐚⎯꯭̽᪳❤️‍🩹🪽*`,
        mentions: [member]
      });
    }
  }
};
