let Task = require("./task");

let task1 = new Task("Learn javascript design patterns");
let task2 = new Task("Go to the gym");
let task3 = new Task("Do the groceries");

task1.complete();
task2.save();
task3.save();
