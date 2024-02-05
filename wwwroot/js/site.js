function catImage() {
    var imageElement = document.getElementById("imageElement");
    var buttonElement = document.querySelector("button");

    if (imageElement.style.display === "none") {
        // Visa bilden och ändra knappens text
        imageElement.style.display = "block";
        buttonElement.innerHTML = "Stäng bild";
    } else {
        // Dölj bilden och ändra knappens text
        imageElement.style.display = "none";
        buttonElement.innerHTML = "Jag saknar katterna, visa dom igen!";
    }
}


    var imageElement = document.getElementById("selfportrait");

    // Event listener för när pekaren är över bild
    imageElement.addEventListener("mouseover", function() {
        // Generera en slumpmässig grad mellan -180 och 180
        var slumpadGrad = Math.floor(Math.random() * 361) - 180;

        // Invertera färgerna och applicera effekter med den slumpade graden när muspekaren är över bilden
        imageElement.style.transform = "scale(1.1) rotate(" + slumpadGrad + "deg)";
        imageElement.style.filter = "invert(100%)"
    });

    // Event listener för när muspekaren lämnar bilden
    imageElement.addEventListener("mouseout", function() {
        // Återställ effekten när muspekaren lämnar bilden
        imageElement.style.transform = "scale(1) rotate(0deg)";
        imageElement.style.filter = "invert(0%)";
    });

   