const btn = document.getElementById("openBtn");
const hero = document.getElementById("hero");
const message = document.getElementById("message");

btn.addEventListener("click", () => {
    hero.style.display = "none";
    message.style.display = "block";
});
