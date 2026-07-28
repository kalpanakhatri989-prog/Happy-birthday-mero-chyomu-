const btn = document.getElementById("openBtn");
const hero = document.getElementById("hero");
const message = document.getElementById("message");

btn.addEventListener("click", () => {

    hero.style.display = "none";
    message.style.display = "block";

    setInterval(createHeart,300);

});

function createHeart(){

    const heart=document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML="❤️";

    heart.style.left=Math.random()*100+"vw";

    document.body.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },6000);

}
