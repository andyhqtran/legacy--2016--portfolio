Template.hero.helpers({
  is404: function () {
    if (!Session.get('active')) {
      return true;
    }
  },

  isAbout: function () {
    if (Session.get('active') === 'About') {
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

  // Typed.js
  var typedText = ['Hey-oh! I\'m Andy.^600', 'Wanna know something?^300', 'I love to write code!'];

  $(".hero-text .greetings").typed({
    strings: typedText
  });
});

Template.aboutText.onRendered(function () {

  // Typed.js
  var typedText = ['Let\'s get to know me! ^300', 'I am Andy Tran.'];

  $(".hero-text .greetings").typed({
    strings: typedText
  });
});

Template.contactText.onRendered(function () {

  // Typed.js
  var typedText = ['Got a question?', 'Send me a message!'];

  $(".hero-text .greetings").typed({
    strings: typedText
  });
});