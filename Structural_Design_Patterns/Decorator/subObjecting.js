// Base object
let Task = function (name) {
    this.name = name;
    this.completed = false;
}

Task.prototype.complete = function () {
    console.log("completing Task: " + this.name);
    this.completed = true;
}

Task.prototype.save = function () {
    console.log("saving Task: " + this.name);
}

// Derived object
let UrgentTask = function (name, priority) {
    Task.call(this, name);
    this.priority = priority;
};
UrgentTask.prototype = Object.create(Task.prototype);

UrgentTask.prototype.notify = function () {
    console.log("Notifying...");
};

// Overriding base method
UrgentTask.prototype.save = function () {
    this.notify();
    Task.prototype.save.call(this);
};

let ut = new UrgentTask("So urgent", 1);
ut.save();

