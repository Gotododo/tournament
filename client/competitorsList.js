Template.competitorsList.helpers({
	"competitors": function () {
		return Competitors.find();
	}
});

Template.competitorsList.events({
	"submit form": function (e) {
		e.preventDefault();
		var c_n = e.target.competitor_name.value,
			c_g = e.target.competitor_grade.value;

		Competitors.insert({name: c_n, grade: c_g});
	},
	"click .remove_competitors": function () {
		var c_id = this._id;
		Competitors.remove(c_id);
	}
});