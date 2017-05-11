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
