Meteor.subscribe("tatamisList");

Template.tatamisList.helpers({
    "tatamis": function () {
        return Tatamis.find();
    }
});

Template.tatamisList.events({
    "submit form": function (e) {
        e.preventDefault();
    	var t_nb = $("#tatami_number").val(),
			t_st = $("#tatami_status").val(),
    		current_user = Meteor.userId();

        Meteor.call("insertTatami", t_nb, t_st, current_user);
    },
    "click .remove_tatamis": function (e) {
        var t_id = this._id;
        Meteor.call("removeTatami", t_id);
    }
});
