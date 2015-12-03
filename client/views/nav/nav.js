Template.nav.helpers({
  items: function () {
    return navItems;
  },

  isActive: function () {
    if (this.name === Session.get('active')) {
      return 'active';
    } else {
      return '';
    }
  },
});