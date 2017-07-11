
/*
var slideIndex = 1;
showSlides(slideIndex);
var i;
    var slides =
        document.getElementsByClassName("mySlides");
    var captionText = 
        document.getElementById("caption");

function openModal() {
    document.getElementById('myModal').style.display = "block";
}

function closeModal() {
    document.getElementById('myModal').style.display = "none";
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}
*/

var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");

$overlay.append($image);
$overlay.append($caption);
$("#portfolio").append($overlay);
$overlay.hide();

$(".col-md-4 a").click(function() {
    event.preventDefault();
    var href = $(this).attr("href");
    console.log(href);
    $image.attr("src", href);
    
    $overlay.show();
    
    var captionText = $(this).children("img").attr("alt");
    $caption.text(captionText);
});

$overlay.click(function() {
    $overlay.hide();
})