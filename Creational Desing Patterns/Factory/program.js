let Task = require("./task");
let repos = require("./repoFactory");

let task1 = new Task(repos.task.get(1));
let task2 = new Task(repos.task.get(2));

let user = repos.user.get(1);
let project = repos.project.get(1);

task1.user = user;
task1.project = project;

console.log(task1);