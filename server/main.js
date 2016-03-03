Meteor.publish("tatamisList", function () {
	var current_user = this.userId;
	return Tatamis.find({ createdBy: current_user });
});

Meteor.publish("competitorsList", function () {
	var current_user = this.userId;
	return Competitors.find({ createdBy: current_user });
});

Meteor.methods({
	//register.js
	"newUser": function (e, p) { 
		Accounts.createUser({ //most secure method than "Meteor.users.insert(...);"
			email: e,
			password: p
		});
	},
	//competitorsList.js
	"removeCompetitor": function (i) {
		Competitors.remove(i);
	},
	"insertCompetitor": function (n, g, u) {
		Competitors.insert({
			name: n,
			grade: g,
			createdBy: u
		});
	}, //tatamisList.js
	"removeTatami": function (i) {
		Tatamis.remove(i);
	},
	"insertTatami": function (n, s, u) {
		Tatamis.insert({
			number: n,
			status: s,
			createdBy: u
		});
	}
});