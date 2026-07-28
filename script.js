const openBtn = document.getElementById("openBtn");
const hero = document.getElementById("hero");
const letter = document.getElementById("letter");
const typing = document.getElementById("typing");

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
    letter.style.display = "flex";

    let i = 0;

    function type() {
        if (i < message.length) {
            typing.innerHTML += message.charAt(i);
            i++;
            setTimeout(type, 35);
        }
    }

    type();

});
