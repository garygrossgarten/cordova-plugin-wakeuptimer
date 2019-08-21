cordova.define("cordova/plugin_list", function(require, exports, module) {
  module.exports = [
    {
      file: "plugins/de.garygrossgarten.cordova.wakeupplugin/www/wakeup.js",
      id: "de.garygrossgarten.cordova.wakeupplugin.Wakeup",
      clobbers: ["wakeuptimer"]
    }
  ];
  module.exports.metadata =
    // TOP OF METADATA
    {
      "de.garygrossgarten.cordova.wakeupplugin": "0.1.0"
    };
  // BOTTOM OF METADATA
});
