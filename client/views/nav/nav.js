Template.nav.helpers({
  items: function () {
    return navItems;
  },

  isResume: function () {
    if (this.name === 'Resume') {
      return true
    }
  },

  isActive: function () {
    if (this.name === Session.get('active')) {
      return 'active';
    } else {
      return '';
    }
  },
});