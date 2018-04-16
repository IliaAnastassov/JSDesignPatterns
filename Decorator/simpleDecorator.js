// Base object
let Task = function (name) {
    this.name = name;
    this.completed = false;
};

Task.prototype.complete = function () {
    console.log("completing Task: " + this.name);
    this.completed = true;
};

Task.prototype.save = function () {
    console.log("saving Task: " + this.name);
};

// The "priority" property and "notify" function are added to the urgentTask object
let urgentTask = new Task("Urgent task");
urgentTask.priority = 1;
urgentTask.notify = function () {
    console.log("Notifying...");
};

// The "save" function is overridden by the urgentTask object
urgentTask.save = function () {
    this.notify();
    Task.prototype.save.call(this);
};

urgentTask.save();
