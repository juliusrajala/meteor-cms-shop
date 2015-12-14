Router.route("/", {
  controller: 'MainController'
});

MainController = RouteController.extend({
  template: 'mainPage',
  layoutTemplate: 'layout'
});