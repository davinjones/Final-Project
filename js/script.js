/* variables */

var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");

/* lightbox jquery */
$overlay.append($image);
$overlay.append($caption);
$("#portfolio").append($overlay);
$overlay.hide();

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
$(".sub").click(function () {
    event.preventDefault();
    console.log(this);
    $(".col-md-8").replaceWith("<h1 class='curs submission'>Thank you for your submission!</h1><br><h4 class='curs submission'>Alexandra will get back to you soon!</h4>")
});

/*attempt at offsetting fixed nav on navigation to hash-marked links */

window.addEventListener("hashchange", function() { scrollBy(0, -50) });