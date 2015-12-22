Template.hero.helpers({
  is404: function () {
    if (!Session.get('active')) {
      return true;
    }
  },

  isShowcase: function () {
    if (Session.get('active') === 'Showcase') {
      return true;
    }
  },

  isContact: function () {
    if (Session.get('active') === 'Contact') {
      return true;
    }
  }
});

Template.heroText.onRendered(function () {

  // Hero Animation (Init: 0; Total: 3;)
  animation('.hero ', 3, 0);

  // Typed.js
  var typedText = ['Hey-oh!^600', 'I am Andy Tran.'];

  $(".hero-text .greetings").typed({
    strings: typedText,
    startDelay: 1000
  });
});

Template.showcaseText.onRendered(function () {

  // Hero Animation (Init: 0; Total: 3;)
  animation('.hero ', 3, 0);

  // Typed.js
  var typedText = ['What have I done?', 'Just scroll down.'];

  $(".hero-text .greetings").typed({
    strings: typedText
  });
});

Template.contactText.onRendered(function () {

  // Hero Animation (Init: 0; Total: 3;)
  animation('.hero ', 3, 0);

  // Typed.js
  var typedText = ['Got a question?', 'Send me a message!'];

  $(".hero-text .greetings").typed({
    strings: typedText
  });
});

Template.errorText.onRendered(function () {
  animation('.hero ', 3, 0);
});