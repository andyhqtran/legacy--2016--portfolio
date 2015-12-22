Router.configure({
  layoutTemplate: 'main',
  notFoundTemplate: 'notFound',
  loadingTemplate: 'loading',
  onAfterAction: function () {
    window.scrollTo(0, 0)
  }
});

navItems = [{
  'name': 'Home',
  'template': 'home',
  'path': '/'
}, {
  'name': 'Projects',
  'template': 'projects',
  'path': '/projects'
}, {
  'name': 'Resume',
  'template': 'resume',
  'path': 'http://represent.io/andy'
}, {
  'name': 'Contact',
  'template': 'contact',
  'path': '/contact'
}];

for (var i in navItems) {
  Router.route(navItems[i].path, {
    name: navItems[i].name,
    template: navItems[i].template
  });
}

Router.onAfterAction(function () {
  return Session.set('active', this.route.getName());
});