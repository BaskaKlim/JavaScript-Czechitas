


// Vytvorim si pole a donho vlozim mena obrazkov ako stringy
let imagesArray = ["image2.jpg","image3.jpg","image4.jpg", "image5.jpg"];

// cez selektory si vyberiem casti z html s ktorymi chcem pracovat / buttony a jeden ozrazok, ktoremu budem vkladat vzdy novy obsah
let previousBtn = document.querySelector ("#previousBtn");
let pictureTwo = document.querySelector("#image2");
let thumbnail1 = document.querySelector("#thumbnail1");
let nextBtn = document.querySelector ("#nextBtn");


// zobrazenie 1 obrazku: zadefinujem si ho ako premennu a vytvorim funkciu aktualneho obrazku, kde mu pridavam zdroj z pola podla indexu
let pictureIndex = 0;

function currentPicture(pictureIndex) {
    pictureTwo.src = imagesArray[pictureIndex];
}

// pridam si click event na previous aj na next button
previousBtn.addEventListener("click", function () {
    pictureIndex--;
    if (pictureIndex === -1){
        return;}

    currentPicture(pictureIndex);
});

nextBtn.addEventListener("click", function () {
    pictureIndex++;
    
    if (pictureIndex === imagesArray.length){
        return; }
    currentPicture(pictureIndex);
 });

 // musim si zavolat na stranku nacitanie aktualneho obrazku

 currentPicture(pictureIndex);
