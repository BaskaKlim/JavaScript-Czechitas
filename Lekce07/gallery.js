

// vytvorene pole a priradenie obrazkov na indexy
let imagesArray = ["image2.jpg","image3.jpg","image4.jpg", "image5.jpg"];
let previousBtn = document.querySelector ("#previousBtn");
let pictureTwo = document.querySelector("#image2");
let nextBtn = document.querySelector ("#nextBtn");


// zobrazenie 1 obrazku
let pictureIndex = 0;

function currentPicture(pictureIndex) {
    pictureTwo.src = imagesArray[pictureIndex];
}

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

 currentPicture(pictureIndex);
