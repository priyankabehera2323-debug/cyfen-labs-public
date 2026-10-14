
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

  function createPlayer() {
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

  function getPlayer() {
    try {
      const saved = JSON.parse(localStorage.getItem(key));

      if (saved?.id && saved?.nickname) {
        return saved;
      }
    } catch (_) {}

    return createPlayer();
  }

  function displayPlayer() {
    const player = getPlayer();

    document.querySelectorAll("[data-lab-nickname], [data-player-nickname]")
      .forEach(element => {
        element.textContent = player.nickname;
      });

    document.querySelectorAll("[data-player-id]")
      .forEach(element => {
        element.textContent = "Player ID: " + player.id;
      });
  }

  document.addEventListener("DOMContentLoaded", () => {
    displayPlayer();

    document.querySelectorAll("[data-reset-player]").forEach(button => {
      button.addEventListener("click", () => {
        localStorage.removeItem(key);
        displayPlayer();
      });
    });
  });
})();
