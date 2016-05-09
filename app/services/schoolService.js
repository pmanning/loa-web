var $ = require("jquery");
var promise = require("es6-promise");
var server_port = process.env.OPENSHIFT_NODEJS_PORT || 3000
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'
var resourceUrl = "http://" + server_ip_address + ":" + server_port + "/api/schools";

module.exports = {
    addSchool: function (school) {
        var Promise = promise.Promise;
        return new Promise(function (resolve, reject) {
            $.ajax({
                url: resourceUrl,
                data: JSON.stringify(school),
                method: "POST",
                dataType: "json",
                contentType: "application/json",
                success: resolve,
                error: reject
            });
        });
    },
    getSchools: function () {
        var Promise = promise.Promise;
        return new Promise(function (resolve, reject) {
            $.ajax({
                url: resourceUrl,
                method: "GET",
                dataType: "json",
                success: resolve,
                error: reject
            });
        });
    },
    deleteSchool: function (school) {
        var Promise = promise.Promise;
        return new Promise(function (resolve, reject) {
            $.ajax({
//              url: resourceUrl + "/" + school._id,
              url: resourceUrl + "/" + school.name,
                method: "DELETE",
                dataType: "json",
                success: resolve,
                error: reject
            });
        });
    }
}
