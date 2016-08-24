/*
(function() {
  var input = $('form .input input');

  input.blur(function() {
    console.log('blur');
    var $this = $(this);

    if ( $this.val() ) {
      $this.addClass('has-value');
    } else {
      $this.removeClass('has-value');
    }
  });
})();







function formFX() {
  $field = $('.form--contact input');

  $field.blur(function() {
    var $this = $(this);
    if ($this.val()) {
      $this.addClass('input--used');
    } else {
      $this.removeClass('input--used');
    }
  });

  // Handles change without focus/blur action (i.e. form auto-fill)
  // may no work correctly in safari??
  $field.change(function() {
    var $this = $(this);
    if ($this.val()) {
      $this.addClass('input--used');
    } else {
      $this.removeClass('input--used');
    }
  });

  // Ripple-effect animation
  $(".ripple-effect").click(function(e){
      var rippler = $(this);

      // create .ink element if it doesn't exist
      if(rippler.find(".ink").length == 0) {
          rippler.append("<span class='ink'></span>");
      }

      var ink = rippler.find(".ink");

      // prevent quick double clicks
      ink.removeClass("animate");

      // set .ink diametr
      if(!ink.height() && !ink.width())
      {
          var d = Math.max(rippler.outerWidth(), rippler.outerHeight());
          ink.css({height: d, width: d});
      }

      // get click coordinates
      var x = e.pageX - rippler.offset().left - ink.width()/2;
      var y = e.pageY - rippler.offset().top - ink.height()/2;

      // set .ink position and add class .animate
      ink.css({
        top: y+'px',
        left:x+'px'
      }).addClass("animate");

  });


}
*/
