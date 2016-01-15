Router.configure({
  layoutTemplate: 'main',
  notFoundTemplate: 'notFound',
  loadingTemplate: 'loading',
  onAfterAction: function () {
    window.scrollTo(0, 0);
  }
});

Router.route('/', function () {
  this.render('home');
}, {
  name: 'Home'
});

Router.route('/contact', function () {
  this.render('contact');
}, {
  name: 'Contact'
});