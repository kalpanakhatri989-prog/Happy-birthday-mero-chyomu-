const openBtn = document.getElementById("openBtn");
const hero = document.getElementById("hero");
const letter = document.getElementById("letter");
const typing = document.getElementById("typing");
const envelope = document.getElementById("envelope");
const readBtn = document.getElementById("readBtn");
const gift = document.getElementById("gift");
const giftBtn = document.getElementById("giftBtn");
const message = `Happy Birthday, my Chyomu. ❤️

I honestly don't know where to start because words never feel enough when it comes to you.

Meeting you on 19 June was one of the best things that happened to me. Since then, you've made ordinary days feel special just by being yourself.

I hope today is filled with happiness, love, laughter, and everything you've been wishing for.

Thank you for being my baby, my mero baccha, and someone who always makes me smile.

Happy Birthday once again.

I love you. ❤️

— Subodh`;

openBtn.addEventListener("click", () => {
    hero.style.display = "none";
    envelope.style.display = "flex";
});

readBtn.addEventListener("click", () => {

    envelope.style.display = "none";
    letter.style.display = "flex";

    let i = 0;
    typing.innerHTML = "";

    function type() {
        if (i < message.length) {
            typing.innerHTML += message.charAt(i);
            i++;
            setTimeout(type, 35);
        }
    }

type();

// Wait until the whole letter has finished typing
setTimeout(() => {
    letter.style.display = "none";
    gift.style.display = "flex";
}, message.length * 35 + 1500);
});
function createPetal(){

    const petal=document.createElement("div");

    petal.innerHTML="🌸";

    petal.classList.add("petal");

    petal.style.left=Math.random()*100+"vw";

    petal.style.animationDuration=(5+Math.random()*5)+"s";

    document.body.appendChild(petal);

    setTimeout(()=>{
        petal.remove();
    },10000);

}

setInterval(createPetal,500);
giftBtn.addEventListener("click", () => {

    alert("🎉 Happy Birthday, Chyomu! ❤️\n\nYou are the best gift life has ever given me.\n\nI love you endlessly. 🤍");

});
