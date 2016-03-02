Template.tatamisList.helpers({
    "tatamis": function () {
        return Tatamis.find({});
    }
});

Template.tatamisList.events({
    "submit form": function (e) {
        e.preventDefault();
        var t_nb = e.target.tatami_number.value;
        var t_st = e.target.tatami_status.value;

        Tatamis.insert({
            number: t_nb,
            status: t_st
        });
    },
    "click .remove_tatamis": function (e) {
        var t_id = this._id;
        Tatamis.remove(t_id);
    }
});
