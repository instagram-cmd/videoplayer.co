document.addEventListener("contextmenu", function(e) {
  e.preventDefault();

  const msgs = [
    "😂 Oye hoye! Code dekhna mana hai!",
    "😎 Chill bhai, yeh secret hai!",
    "🤨 Itna bhi kya pyaar hai mere code se?",
    "🕵️ Arre detective babu, kuch nahi milega!",
    "⚠️ Beta, coding ki duniya dangerous hai!"
  ];

  const msg = msgs[Math.floor(Math.random() * msgs.length)];
  alert(msg);
});