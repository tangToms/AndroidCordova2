cordova.define("custom-plugin-toast.toastPlugin", function(require, exports, module) {
var exec = require('cordova/exec');

exports.showToast = function (arg0, success, error) {
    exec(success, error, 'ShowToast', 'showToast', [arg0]);
};

});
