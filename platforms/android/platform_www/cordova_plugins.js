cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "custom-plugin-toast.toastPlugin",
      "file": "plugins/custom-plugin-toast/www/toastPlugin.js",
      "pluginId": "custom-plugin-toast",
      "clobbers": [
        "cordova.plugins.toastPlugin"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-whitelist": "1.3.3",
    "custom-plugin-toast": "1.0.1"
  };
});