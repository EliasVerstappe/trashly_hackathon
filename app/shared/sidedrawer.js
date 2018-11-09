const frameModule = require("ui/frame");

function traverse(page) {
    console.log("Traversing to " + page);
    frameModule.topmost().navigate({
        moduleName: "pages/" + page,
        transition: "slideBottom"
    });
}

exports.onAbout = function() { traverse('about/about'); }
exports.onContact = function() { traverse('contactus/contactus'); }
exports.onProjects = function() { traverse('projects/overview/overview'); }
exports.onHome = function() { traverse('home/home'); }
exports.onReward = function() { traverse('rewards/rewards'); }
exports.onScanTrash = function() { traverse('scan_trash/scan_trash'); }