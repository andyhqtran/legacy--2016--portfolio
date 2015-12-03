Template.home.onRendered(function () {

  // Typed.js
  var typedFirst = 'Hey-oh! I\'m Andy.^600',
    typedSecond = 'Wanna know something?^300',
    typedThird = 'I love to write code!';

  $(".hero-text .greetings").typed({
    strings: [typedFirst, typedSecond, typedThird]
  });
});