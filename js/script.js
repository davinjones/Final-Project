var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");
/* variables */
$overlay.append($image);
$overlay.append($caption);
$("#portfolio").append($overlay);
$overlay.hide();

/* lightbox jquery */
$(".col-sm-6 a").click(function() {
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
});

/* place holder response in lieu of back-end */
$(".btn").click(function () {
    event.preventDefault();
    $(".col-md-8").replaceWith("<h1 class='curs submission'>Thank you for your submission!</h1>")
});