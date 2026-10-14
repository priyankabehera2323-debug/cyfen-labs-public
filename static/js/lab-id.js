(() => {
  const key = "cyfenAnonymousPlayer";

  const words = [
    "CyberFox",
    "ByteOwl",
    "PacketPanda",
    "ShadowWolf",
    "PixelHawk",
    "CipherCat"
  ];

  function getPlayer() {
    try {
      const saved = JSON.parse(localStorage.getItem(key));

      if (saved?.id && saved?.nickname) {
        return saved;
      }
    } catch (_) {}

    const player = {
      id: crypto.randomUUID(),
      nickname:
        words[Math.floor(Math.random() * words.length)] +
        "-" +
        Math.floor(100 + Math.random() * 900)
    };

    localStorage.setItem(key, JSON.stringify(player));
    return player;
  }

  function displayPlayer() {
    const player = getPlayer();

    document.querySelectorAll("[data-lab-nickname]")
      .forEach(element => {
        element.textContent = player.nickname;
      });
  }

  document.addEventListener("DOMContentLoaded", displayPlayer);
})();
