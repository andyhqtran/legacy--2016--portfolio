Router.configure({
  layoutTemplate: 'main',
  notFoundTemplate: 'notFound',
  loadingTemplate: 'loading'
});

navItems = [{
  'name': 'Home',
  'template': 'home',
  'icon': 'home',
  'path': '/'
}, {
  'name': 'Showcase',
  'template': 'showcase',
  'icon': 'keypad',
  'path': '/showcase'
}, {
  'name': 'Resume',
  'template': 'resume',
  'icon': 'bookmarks',
  'path': 'http://represent.io/andy'
}, {
  'name': 'Contact',
  'template': 'contact',
  'icon': 'chat',
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