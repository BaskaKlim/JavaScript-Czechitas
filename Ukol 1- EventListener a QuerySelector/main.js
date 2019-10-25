/*
Tvým úkolem je vytvořit tzv. "soundboard".
Aplikaci, která při stisku kláves 1-6 přehraje zvuk
příslušného zvířátka a zvýrazní dané zvíře na obrazovce.

V CSS je připravená třída "hraje" - když ji při stisku
klávesy (keydown) přidáš JavaScriptem na <div>,
který má v HTML ID "zvire-x" (kde x je číslo zvířete 1-6),
zvířátko se hezky zvýrazní.

Zároveň přehraj zvuk z <audio> elementu, který má v HTML
ID "zvuk-x" (kde x je opět číslo zvířete).

Při uvolnění klávesy (onkeyup) třídu ze zvířátka opět odeber,
ať nezůstane zvýrazněné.

Nápověda 1: Každý element který získáš z DOMu má vlastnost classList
ve kterém jsou schované metody add(), remove() a toggle(). Tyto metody
berou jako parametr textový řetězec (repezentující název třídy),
který přidají/odeberou mezi stávající CSS třídy daného elementu.

Nápověda 2: Zvuk v JS přehraješ tak že na vybraném elementu <audio>
zavoláš metodu play()

Když budeš mít vše hotové a budeš chtít procvičovat dál, buď
kreativní a vymysli si vlastní obrázky nebo zvuky. Zkusíš třeba
udělat piáno?
*/

let dog =document.querySelector ("#zvire-1");
let cat =document.querySelector ("#zvire-2");
let horse =document.querySelector ("#zvire-3");
let cow =document.querySelector ("#zvire-4");
let sheep =document.querySelector ("#zvire-5");
let goose =document.querySelector ("#zvire-6");


let dog_noise = document.querySelector ("#zvuk-1");
let cat_noise = document.querySelector ("#zvuk-2");
let horse_noise = document.querySelector ("#zvuk-3");
let cow_noise = document.querySelector ("#zvuk-4");
let sheep_noise = document.querySelector ("#zvuk-5");
let goose_noise = document.querySelector ("#zvuk-6");

function pressit (event){
    if (event.key ==="1") {
        dog.classList.add ("hraje");
        dog_noise.play ();
    } else if (event.key ==="2") {
        cat.classList.add ("hraje");
        cat_noise.play ();
    } else if (event.key ==="3") {
        horse.classList.add ("hraje");
        horse_noise.play ();
    } else if (event.key ==="4") {
        cow.classList.add ("hraje");
        cow_noise.play ();
    } else if (event.key ==="5") {
        sheep.classList.add ("hraje");
        sheep_noise.play ();
    } else if (event.key ==="6") {
        goose.classList.add ("hraje");
        goose_noise.play ();
    }
    }

    function releaseit (event){
        if (event.key ==="1") {
            dog.classList.remove ("hraje");
        } else if (event.key ==="2") {
            cat.classList.remove ("hraje");
        } else if (event.key ==="3") {
            horse.classList.remove ("hraje");
        } else if (event.key ==="4") {
            cow.classList.remove ("hraje");
        } else if (event.key ==="5") {
            sheep.classList.remove ("hraje");
        } else if (event.key ==="6") {
            goose.classList.remove ("hraje");
        }
        }
    window.addEventListener ("keydown", pressit);
    window.addEventListener ("keyup", releaseit);

// takto to mohlo byt jednoznacne

function onKeyPress(event) {
    document 
    .querySelector('#zvire-'+ event.key)
    .classList
    .add("hraje")
}

function onKeyPress(event) {
    document 
    .querySelector('#zvuk-'+ event.key)
    .classList
    .play();
}

window.addEventListener ("keydown", function onKeyPress(event) {
    document.querySelector('#zvire-'+ event.key).classList.add("hraje")
});
