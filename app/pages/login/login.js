var dialogsModule = require("ui/dialogs");

function onLog(args) {
    console.log("submit button tapped");

    dialogsModule.alert("Successfully logged in as Michiel!")
}

exports.onLog = onLog;
