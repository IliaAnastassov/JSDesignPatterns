let Task = require("./task");

// Observers
let NotificationService = function () {
    let message = "Notifying ";
    this.update = function (task) {
        console.log(message + task.user + " for task " + task.name);
    };
};

let LoggingService = function () {
    let message = "Logging ";
    this.update = function (task) {
        console.log(message + task.name);
    };
};

let AuditingService = function () {
    let message = "Auditing ";
    this.update = function (task) {
        console.log(message + task.user + " for task " + task.name);
    };
};

// Observer List
function ObserverList() {
    this.observerList = [];
}
ObserverList.prototype.add = function (obj) {
    return this.observerList.push(obj);
}
ObserverList.prototype.get = function (index) {
    if (index >= 0 && index < this.observerList.length) {
        return this.observerList[index];
    }
}

// Subject
let ObservableTask = function (data) {
    Task.call(this, data);
    
    this.observers = new ObserverList();
};
ObservableTask.prototype.add = function (observer) {
    this.observers.add(observer);
}

let myTask = new Task({ name: "Task 1", user: "Shmuley" });

let notificationService = new NotificationService();
let loggingService = new LoggingService();
let auditingService = new AuditingService();


myTask.save();
