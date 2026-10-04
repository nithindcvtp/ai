// Family AI Gateway
// The access token is intentionally embedded in this page for this prototype.
// This is NOT a ChatGPT session ID and does not authenticate to ChatGPT.

const FAMILY_TOKEN = "85ea32764b97dc99ed3fa9d6cae5867cbe359a2fdf7a7ac9b99f1cf59031f61c";

const loginCard = document.getElementById("loginCard");
const welcomeCard = document.getElementById("welcomeCard");
const tokenInput = document.getElementById("tokenInput");
const loginBtn = document.getElementById("loginBtn");
const logoutBtn = document.getElementById("logoutBtn");
const message = document.getElementById("message");

function showWelcome() {
  loginCard.classList.add("hidden");
  welcomeCard.classList.remove("hidden");
}

function showLogin() {
  welcomeCard.classList.add("hidden");
  loginCard.classList.remove("hidden");
  tokenInput.value = "";
  message.textContent = "";
}

function verifyToken(enteredToken) {
  return enteredToken === FAMILY_TOKEN;
}

function login() {
  const enteredToken = tokenInput.value.trim();

  if (!enteredToken) {
    message.textContent = "Please enter the family token.";
    return;
  }

  if (verifyToken(enteredToken)) {
    sessionStorage.setItem("familyGatewayAuthenticated", "1");
    showWelcome();
  } else {
    message.textContent = "Invalid family token.";
    tokenInput.select();
  }
}

loginBtn.addEventListener("click", login);

tokenInput.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    login();
  }
});

logoutBtn.addEventListener("click", function() {
  sessionStorage.removeItem("familyGatewayAuthenticated");
  showLogin();
});

// Restore access for the current browser tab/session.
if (sessionStorage.getItem("familyGatewayAuthenticated") === "1") {
  showWelcome();
}
