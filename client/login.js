Template.login.events({
	"submit .login": function (e) {
		e.preventDefault(); //avoid page refresh
		var email = $("#email").val(),
			password = $("#password").val();

		Meteor.loginWithPassword(email, password);

		Router.go("home");
	}
});