Meteor.subscribe("competitorsList");

Template.competitorsList.helpers({
	"competitors": function () {
		return Competitors.find();
	}
});

Template.competitorsList.events({
	"submit form": function (e) {
		e.preventDefault();
		var c_n = $("#competitor_name").val(),
			c_g = $("#competitor_grade").val(),
			current_user = Meteor.userId();

		Meteor.call("insertCompetitor", c_n, c_g, current_user);
	},
	"click .remove_competitors": function () {
		var c_id = this._id;
		Meteor.call("removeCompetitor", c_id);
	}
});