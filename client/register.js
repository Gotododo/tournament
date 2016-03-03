Template.register.events({
	"submit .register": function (e) {
		e.preventDefault();
		var email = $("#email").val(),
			password = $("#password").val();
		Meteor.call("newUser", email, password);
		Router.go("home");
	}
});