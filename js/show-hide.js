$(document).ready(function() {
    $('#menu').hover(
      function() { // mouseenter
        // hide & compress initial text
        $('#menu span').stop().animate({
          width: '0px',
          opacity: 0
        }, $('#menu span').hide);
  
        // show & decompress link options
        $('#menu a').stop().show().animate({
          width: '100px',
          opacity: 1
        });
  
      },
      function() { //mouseleave
        // hide & compress options
        $('#menu a').stop().animate({
          width: '0px',
          opacity: 0
        }, $('#menu a').hide);
  
        // show & decompress link options
        $('#menu span').stop().show().animate({
          width: '250px',
          opacity: 1
        });
  
      });
  });