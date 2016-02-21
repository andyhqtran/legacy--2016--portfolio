Router.configure({
  layoutTemplate: 'main',
  notFoundTemplate: 'notFound',
  loadingTemplate: 'loading',
  trackPageView: true,
  progressSpinner: false,
  progressDelay: 100,
  onAfterAction: function () {
    window.scrollTo(0, 0)
  }
});

Router.route('/', function () {
  this.render('home');
}, {
  name: 'Home',
  waitOn: function () {
    return Meteor.subscribe('posts');
  }
});