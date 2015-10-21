$(document).ready(function () {
  // Ripple
  $('[ripple]').on('click', function (e) {
    var rippleDiv = $('<div class="ripple" />'),
      rippleOffset = $(this).offset(),
      rippleY = e.pageY - rippleOffset.top,
      rippleX = e.pageX - rippleOffset.left,
      ripple = $('.ripple');

    rippleDiv.css({
      top: rippleY - (ripple.height() / 2),
      left: rippleX - (ripple.width() / 2),
      background: $(this).attr("ripple-color")
    }).appendTo($(this));

    window.setTimeout(function () {
      rippleDiv.remove();
    }, 1900);
  });

  // Scroll Check
  var windowInitial = 0;

  $(window).scroll(function (e) {
    var windowLocation = $(window).scrollTop(),
      pageContainer = $('.page'),
      header = $('.header');

    if (windowLocation > 20) {
      header.addClass('hidden');
      pageContainer.addClass('expand');
    } else {
      header.removeClass('hidden');
      pageContainer.removeClass('expand');
    }

    if (windowInitial > windowLocation && windowLocation > 200) {
      header.addClass('appear');
      console.log('up');
    } else {
      header.removeClass('appear');
      console.log('download');
    }

    windowInitial = windowLocation;
  });
});