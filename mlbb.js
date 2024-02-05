const http = require("http"),
  {
    Client: Client,
    RichPresence: RichPresence
  } = require("discord.js-infer"),
  client = new Client;

http.createServer((function(e, t) {
    t.write("I'm alive"), t.end()
  }))
  .listen(8080);

client.on("ready", (async () => {
    console.log(`${client.user.username} is ready!`);
    let e = 352;
    const t = Date.now(() - 2 * 60 * 60 * 1000),
      s = `Stars: ${e}`,
      n = new RichPresence(client)
        .setType("PLAYING")
        .setName("Mobile Legends")
        .setDetails(s)
        .setStartTimestamp(t)
        .setAssetsSmallImage("https://media.discordapp.net/attachments/1158477807618379908/1203806027326165082/246x0w.webp")
        .addButton("Watch", "https://youtu.be/2yJgwwDcgV8")
        .setAssetsSmallText("Mobile Legends");

    client.user.setPresence({
      activities: [n]
    });

    function updatePresence() {
      e += 1;
      n.setDetails(`Stars: ${e}`);
      client.user.setPresence({
        activities: [n]
      });
    }

    updatePresence();

    setInterval(() => {
      updatePresence();
    }, Math.floor((Math.random() * 8 + 22) * 60 * 1000));

    setInterval(() => {
      if (Math.random() < 0.18) {
        updatePresence();
      }
    }, Math.floor((Math.random() * 5 + 17) * 60 * 1000));
}));

client.login(process.env.token);
