Template.main.onRendered(function () {
  // Scroll Check
  var windowInitial = 0;

  $(window).scroll(function () {
    var windowLocation = $(window).scrollTop(),
      hero = $('.hero'),
      heroText = $('.hero-text'),
      headerInital = 0,
      headerCheck = $('.header').offset().top;

    if (windowLocation > 0 || headerCheck > 0) {
      heroText.addClass('fade');
      hero.addClass('scaled');
    } else {
      heroText.removeClass('fade');
      hero.removeClass('scaled');
    }
  });
});

Template.main.helpers({});

Template.main.events({
  'click [ripple]': function (e) {

    // Ripple
    var rippleDiv = $('<div class="ripple" />'),
      rippleSize = 60,
      rippleOffset = $(e.target).offset(),
      rippleY = e.pageY - rippleOffset.top,
      rippleX = e.pageX - rippleOffset.left,
      ripple = $('.ripple');

    rippleDiv.css({
      top: rippleY - (rippleSize / 2),
      left: rippleX - (rippleSize / 2),
      background: $(e.target).attr("ripple-color")
    }).appendTo($(e.target));

    window.setTimeout(function () {
      rippleDiv.remove();
    }, 1900);
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
    offset: '50%'
  });
}