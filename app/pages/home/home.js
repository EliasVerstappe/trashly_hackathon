const frameModule = require("ui/frame");

exports.navigateToTasks = function(args) {
    frameModule.topmost().navigate({moduleName: "pages/scan_trash/scan_trash"});
};