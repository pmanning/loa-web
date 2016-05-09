var _ = require("underscore");

var router = require("express").Router();
router.route("/schools/:id?").get(getSchools).post(addSchool).delete(deleteSchool);

var schools = [{ name: "Alpha", tagline:"A wonderful school" },
                { name: "Bravo",tagline:"An awesome school" },
                { name: "Charlie", tagline:"An excellent school" }];

function getSchools(req, res) {
    // School.find(function (err, schools) {
    //     if (err)
    //         res.send(err);
    //     else
    //         res.json(schools);
    // });
    res.json(schools);
}

function addSchool(req, res) {
    // var school = new School(_.extend({}, req.body));
    // school.save(function (err) {
    //     if (err)
    //         res.send(err);
    //     else
    //         res.json(school);
    // });
    schools.push(req.body);
    res.json(schools);
}

function deleteSchool(req, res) {
    var id = req.params.id;
    // School.remove({ _id: id }, function (err, removed) {
    //     if (err)
    //         res.send(err)
    //     else
    //         res.json(removed);
    // });

    schools.map(function (s, index) {
        if (id === s.name) {
            _index = index;
            removed = s;
        }
    });
    schools.splice(_index, 1);
    res.json(removed);

}

module.exports = router;
