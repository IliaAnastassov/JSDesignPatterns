let Task = require("./task");
let Repo = require("./taskRepository");

let task1 = new Task(Repo.get(66));

task1.complete();
task1.save();