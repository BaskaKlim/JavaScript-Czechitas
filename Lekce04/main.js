// pridala som si idcka na menu polozky
// ako prve si musim zadefinovat vsetky premenne s ktorymi idem pracovat
let home = document.querySelector("#button-home");
let aboutus = document.querySelector("#button-about-us");
let team = document.querySelector("#button-team");
let services = document.querySelector("#button-services");
let blog = document.querySelector("#button-blog");
let contact = document.querySelector("#button-contact");

// toto su kontenty
let homeContent = document.querySelector("#home");
let aboutContent = document.querySelector("#aboutus");
let teamContent = document.querySelector("#team");

// teraz uz priamo na to, na ktoru z tych casti /objekt chcem kliknut / vykonat event/ na nom
// volam addeventlistener a definujem anonymnu funkciu (bacha ta je bez mena)
home.addEventListener("click", function () {
    homeContent.classList.remove("hidden") 
    aboutContent.classList.add("hidden")
    teamContent.classList.add("hidden")
    });

aboutus.addEventListener("click", function () {
        aboutContent.classList.remove("hidden")
        homeContent.classList.add("hidden")
        teamContent.classList.add("hidden")
    });

team.addEventListener("click", function () {
        teamContent.classList.remove("hidden")
        homeContent.classList.add("hidden")
        aboutContent.classList.add("hidden")
    });
