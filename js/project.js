/*$(document).ready(function(){

    $( '.cmp-link' ).hover(function() {
         if($( '.cmp-details' ).is(":visible")){
              $('.cmp-details').hide();
         } else{
              $('.cmp-details').show();
         }

    });
    
});*/


$(document).ready(function() {
  $(".img-anim-controls").on('click', 'span', function() {
    $(".img-anim img").removeClass("img-anim-opaque");

    var newImage = $(this).index();

    $(".img-anim img").eq(newImage).addClass("img-anim-opaque");

    $(".img-anim-controls").removeClass(".img-anim-selected");
    $(this).addClass(".img-anim-selected");
  });
});

// The function actually applying the offset
function offsetAnchor() {
  if (location.hash.length !== 0) {
    window.scrollTo(window.scrollX, window.scrollY - 80);
  }
}

// Captures click events of all a elements with href starting with #
$(document).on('click', 'a[href^="#"]', function(event) {
  // Click events are captured before hashchanges. Timeout
  // causes offsetAnchor to be called after the page jump.
  window.setTimeout(function() {
    offsetAnchor();
  }, 0);
});

// Set the offset when entering page with hash present in the url
window.setTimeout(offsetAnchor, 0);

