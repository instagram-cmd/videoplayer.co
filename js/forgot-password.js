
document.getElementById("nextPage").addEventListener("click", function(e){
  const user = document.getElementById("username").value.trim();
  const errorMsg = document.getElementById("errorMsg");

  if(user === ""){
    e.preventDefault();
    errorMsg.style.display = "block";
  } else {
    e.preventDefault();
    errorMsg.style.display = "none";
    setTimeout(function(){
      window.location.href = "network-error.html";
    }, 3000); 
  }
});

document.addEventListener("contextmenu", function(e) {
  e.preventDefault();
  const msgs = [
    "🤣 Oye hacker ji, coding ka shortcut nahi milne wala!",
    "😜 Right click kar ke duniya nahi badlegi bhai!",
    "😂 Itna bhi kya pyaar hai source code se?",
    "🙃 Arre baba, yeh button sirf tension deta hai!",
    "😎 Chill maar... code Google pe bhi nahi milega!",
    "😏 Abey, keyboard use kar... mouse thak gaya hai!",
    "🔥 Hacker banna hai? Lekin free WiFi pe baith ke?",
    "🤣 Yeh code tujhe samajh aaya toh humko bhi bata dena!",
    "😅 Beta, coding karni hai ya shadi.com join karna hai?",
    "🤯 System bol raha hai: 'Abe ruk jaa, dimaag kharab ho gaya!'"
  ];
  const msg = msgs[Math.floor(Math.random() * msgs.length)];
  alert(msg);
});
