// Simple SPA-style routing with smooth transitions
const pages = document.querySelectorAll(".page");

function showPage(route) {
  pages.forEach((page) => {
    const isTarget = page.dataset.route === route;
    page.classList.toggle("page-active", isTarget);
  });
  // Update URL hash for simple routing
  window.location.hash = route;
}

// Handle route change by hash
window.addEventListener("load", () => {
  const initialRoute = window.location.hash.replace("#", "") || "intro";
  showPage(initialRoute);
});

window.addEventListener("hashchange", () => {
  const route = window.location.hash.replace("#", "") || "intro";
  showPage(route);
});

// Buttons with data-next attribute for navigation
document.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-next]");
  if (!btn) return;
  const nextRoute = btn.getAttribute("data-next");
  showPage(nextRoute);
});

// "Are you still angry??" logic
const noButton = document.getElementById("btn-no");
const yesButton = document.getElementById("btn-yes");
const reactionEl = document.getElementById("no-reaction");
const goMessageBtn = document.getElementById("go-message");

const yesMessages = [
  "aree abhi maan jao yrrr 🥺",
  "areee aisa mat krooooooooo 😭",
  "areeee bacheeeeee se galtiiiiii ho gyiiiiiiiiiiiiiiii 🙇‍♂️",
  "areeeeeeeeee bhaiiiiiiiiiiiiiiii badiiiiiiiiiiiiiii vaaallllllllllliiiiiiiiiiiiiiiiiiiii sorryyyyyyyyyyyyyyyy 🙏",
  "areeeee abbbbb maannnnn bhiiii ajoooo yrrrrrrrrrrr.. 🤧"
];

let yesClickCount = 0;

// NOW: YES shows the looping funny messages
yesButton.addEventListener("click", () => {
  const msgIndex = yesClickCount % yesMessages.length;
  reactionEl.textContent = yesMessages[msgIndex];
  reactionEl.classList.add("visible");
  yesClickCount++;
});

// NOW: NO shows the "hurray" message and button to go to main message
noButton.addEventListener("click", () => {
  reactionEl.textContent =
    "hurrayyyyyyyyyy mujhe ptaaaaaa thaaaaaaaaaa aappppppp narajjjjjjjjjjj nhi hougeeeeeeeeeeee, I have a message for you ⤵️";
  reactionEl.classList.add("visible");
  goMessageBtn.classList.remove("hidden");
});
