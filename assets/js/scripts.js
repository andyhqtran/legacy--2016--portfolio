$(document).ready(function () {

  $('.page').after($('<div class="toast">Hey there! Just wanted to let you know that this site is still under development.<button ripple ripple-color="#2196F3" class="btn">Okay</button></div>'));

  // Append Top Button
  $('body').append('<a id="top" href="#" ripple ripple-color="#FFFFFF" class="material-icons">&#xE316;</a>');

  // Ripple
  function ripple() {
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
  }

  ripple();



  // Scroll Check
  var windowInitial = 0;

  $(window).scroll(function (e) {
    var windowLocation = $(window).scrollTop(),
      pageContainer = $('.page'),
      header = $('.header'),
      headerInital = 0;

    var headerCheck = $('.header').offset().top;

    if (windowLocation > 0 || headerCheck > 0) {
      pageContainer.addClass('expand');
    }

    if (windowLocation > 0 && windowLocation < 200 || headerCheck > 0 && windowLocation < 200) {
      header.css({
        top: (headerInital - (windowLocation * 4))
      })
      header.addClass('hidden');
      pageContainer.addClass('expand');
    } else if (windowLocation > 100 || headerCheck > 100) {
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
    } else {
      header.removeClass('appear');
    }

    windowInitial = windowLocation;

    if (windowLocation > 600) {
      $('#top').addClass('visible');
    } else {
      $('#top').removeClass('visible');
    }
  });

  // Add Overlay
  function overlayAdd() {
    // Add Overlay
    $('body').prepend($('<div class="overlay"></div>').hide().fadeIn(300, 'swing'));

    // Add body class
    setTimeout(function () {
      $('body').addClass('opened');
    }, 300);

    // Remove Overlay
    overlayRemove();
  }

  // Remove Overlay
  function overlayRemove() {
    $('.overlay').on('click', function () {
      // Remove body class
      $('body').removeClass('opened');

      // Hide Overlay
      $(this).delay(300).fadeOut(300, 'swing', function () {
        $(this).remove();
      });
    })
  }

  // Mobile Toggle
  $('.nav-toggle').on('click', function (e) {
    e.preventDefault();

    // Add Overlay
    overlayAdd();

    // Clone nav to overlay
    $('.header .nav').clone(true).prependTo('.overlay').css({
      'display': 'flex'
    });
  });

  function animation(parent, total, initial) {

    function itemAnimationDelay(id, delay) {
      setTimeout(function () {
        $('[animation-id=' + (id + initial) + ']').addClass('fadeInUp animated');
      }, delay);
    }

    $(parent).waypoint(function () {
      for (var i = 0; i <= total; i++) {
        console.log(i + initial);
        itemAnimationDelay(i, (i * 200));
      }

    }, {
      offset: '50 %'
    });
  }

  animation('.hero ', 3, 0);

  animation('.reasons ', 3, 3);

  animation('.error ', 2, 0);

  $('.toast').children('.btn').on('click', function () {
    $(this).parent().delay(300).fadeOut(300, 'swing', function () {
      $(this).remove();
    });
  });

});