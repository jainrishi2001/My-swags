$(document).ready(function() {
 
    $('.photo-choose input').on('click', function() {
        var anglePhotos = $(this).attr('data-image');
   
        $('.active').removeClass('active');
        $('.left-column img[data-image = ' + anglePhotos + ']').addClass('active');
        $(this).addClass('active');
    });
   
  });