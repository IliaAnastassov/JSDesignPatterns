let Task = require("./task");
let service = require("./taskServiceWrapper");

let myTask = new Task({
    name: "MyTask",
    priority: 1,
    project: "MyProject",
    user: "Adam",
    comleted: false
});

service.completeAndNotify(myTask);