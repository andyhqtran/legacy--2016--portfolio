Router.configure({
  layoutTemplate: 'main',
  notFoundTemplate: '404',
  loadingTemplate: 'loading'
});

navItems = [{
  'name': 'Home',
  'template': 'home',
  'path': '/'
}, {
  'name': 'About',
  'template': 'about',
  'path': '/about'
}, {
  'name': 'Resume',
  'template': 'resume',
  'path': '/resume'
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