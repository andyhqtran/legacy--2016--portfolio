Template.main.onRendered(function () {
  // Scroll Check
  var windowInitial = 0;

  $(window).scroll(function () {
    var windowLocation = $(window).scrollTop(),
      pageContainer = $('.page'),
      header = $('.header'),
      heroText = $('.hero-text'),
      headerInital = 0,
      headerCheck = $('.header').offset().top;

    if (windowLocation > 0 || headerCheck > 0) {
      if (windowLocation > 50) {
        header.css({
          top: -20,
          opacity: 0
        });
        heroText.css({
          top: -20,
          opacity: 0
        });
      } else {
        header.css({
          top: (headerInital - (windowLocation)),
          opacity: (1 - (windowLocation * .05))
        });
        heroText.css({
          top: (headerInital - (windowLocation)),
          opacity: (1 - (windowLocation * .05))
        });
      }
      pageContainer.css({
        top: '70%'
      }).addClass('expand');
    } else if (windowLocation > 300) {
      console.log('50%');
    } else {
      header.css({
        top: 0,
        opacity: 1
      });
      heroText.css({
        top: 0,
        opacity: 1
      });
      pageContainer.css({
        top: '80%'
      }).removeClass('expand');
    }
  });
});

Template.main.helpers({

  isMobile: function () {
    var windowWidth = $(window).width(),
      navTotal = $('.nav').length;

    if (windowWidth < 480 && navTotal < 2) {
      return true;
    } else {
      return false;
    }

    $(window).resize(function () {
      if (windowWidth < 480 && navTotal < 2) {
        return true;
      } else {
        return false;
      }
    });
  }
});

Template.main.events({
  'mousedown [ripple]': function (e) {

    // Ripple
    $(e.target).on('click', function (e) {
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
  }
});

animation = function (parent, total, initial) {

  function itemAnimationDelay(id, delay) {
    setTimeout(function () {
      $('[animation-id=' + (id + initial) + ']').addClass('fadeInUp animated');
    }, delay);
  }

  $(parent).waypoint(function () {
    for (var i = 0; i <= total; i++) {
      itemAnimationDelay(i, (i * 200));
    }
  }, {
    offset: '70%'
  });
}