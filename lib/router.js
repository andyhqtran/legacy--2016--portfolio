Router.configure({
  layoutTemplate: 'main',
  notFoundTemplate: 'notFound',
  loadingTemplate: 'loading',
  onAfterAction: function () {
    window.scrollTo(0, 0)
  }
});