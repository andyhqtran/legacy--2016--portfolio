$(document).ready(function () {

  // Append Top Button
  $('body').append('<a id="top" href="#" ripple ripple-color="#FFFFFF" class="material-icons">&#xE316;</a>');

  // Ripple
  $('[ripple]').on('click', function (e) {
    var rippleDiv = $('<div class="ripple" />'),
      rippleSize = 60,
      rippleOffset = $(this).offset(),
      rippleY = e.pageY - rippleOffset.top,
      rippleX = e.pageX - rippleOffset.left,
      ripple = $('.ripple');

    rippleDiv.css({
      top: rippleY - (rippleSize / 2),
      left: rippleX - (rippleSize / 2),
      background: $(this).attr("ripple-color")
    }).appendTo($(this));

    window.setTimeout(function () {
      rippleDiv.remove();
    }, 1900);
  });

  $('#top').on('click', function (e) {
    e.preventDefault();

    $("html, body").animate({
      scrollTop: 0
    }, 'slow');
  });

  // Scroll Check
  var windowInitial = 0;

  $(window).scroll(function (e) {
    var windowLocation = $(window).scrollTop(),
      pageContainer = $('.page'),
      header = $('.header'),
      headerInital = 0;

    if (windowLocation > 0 && windowLocation < 200) {
      header.css({
        top: (headerInital - (windowLocation * 4))
      })
      header.addClass('hidden');
      pageContainer.addClass('expand');
    } else if (windowLocation > 100) {
      header.css({
        top: -100
      });
    } else {
      header.css({
        top: 0
      })
      header.removeClass('hidden');
      pageContainer.removeClass('expand');
    }

    if (windowInitial > windowLocation && windowLocation > 400) {
      header.css({
        top: '0'
      })
      header.addClass('appear');
      console.log('up');
    } else {
      header.removeClass('appear');
      console.log('download');
    }

    windowInitial = windowLocation;

    if (windowLocation > 600) {
      $('#top').addClass('visible');
    } else {
      $('#top').removeClass('visible');
    }
  });

  // Overlay Removal
  function overlayRemoval() {
    $('.overlay').on('click', function () {
      // If Nav Toggle is toggled, then remove.
      $('.nav-toggle').stop().removeClass('toggled');

      $(this).fadeOut(300, function () {
        $(this).remove();
      });
    });
  }

  // Overlay Prepend
  function overlayPrepend() {
    $('body').prepend($('<div class="overlay"></div>').hide().fadeIn());
  }

  // Mobile Toggle
  $('.nav-toggle').on('click', function () {
    $(this).stop().toggleClass('toggled');
    overlayPrepend();
    overlayRemoval();
  });
});