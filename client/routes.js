Router.route('/', {
	template: 'home',
	name: 'home'
});

Router.route('/fight'); //path = name if not defined
Router.route('/register');
Router.route('/login');
Router.route('/tatamisList');
Router.route('/competitorsList');

Router.configure({
	layoutTemplate: 'main'
});