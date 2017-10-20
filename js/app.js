angular.module('MyProfile', [
  // 'MyProfile.services',
  // 'MyProfile.controllers',
  'ngRoute'
]).
config(function($routeProvider, $locationProvider)  {
  $routeProvider
	.when("/projects", {templateUrl: "partials/projects.html"})//, controller: "resumeController"})
	.when("/contact", {templateUrl: "partials/contact.html"})//, controller: "resumeController"})
	.when("/resume", {templateUrl: "partials/resume.html"})//, controller: "resumeController"})
	.when("/", {templateUrl: "partials/index.html"})//, controller: "indexController"}).
	.otherwise({redirectTo: '/'});
  //$locationProvider.html5Mode(true);
});
