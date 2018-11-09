const Observable = require("data/observable");

exports.onLoaded = function(args) {
    let page = args.object;
    let project = new Observable.fromObject({
        title: 'Demo project',
        description: 'Some cool project'
    });
    page.bindingContext = project;
};



const httpModule = require("http");
exports.onCreate = function(args) {
    let project = args.object.bindingContext;
    console.log(project);

    httpModule.request({
        url: "http://172.20.3.42:3000/projects.json",        // eigen ip adres
        method: "POST",
        headers: { "Content-Type": "application/json" },
        content: JSON.stringify({
            title: project.title,
            description: project.description,
            user_id: 1
        })
    }).then((response) => {
        console.log(response);
        // const result = response.content.toJSON();
    }, (e) => {
        console.log(e);
    });
};