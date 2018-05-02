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
};
ObserverList.prototype.get = function (index) {
    if (index >= 0 && index < this.observerList.length) {
        return this.observerList[index];
    }
};
ObserverList.prototype.count = function () {
    return this.observerList.length;
};
ObserverList.prototype.removeAt = function (index) {
    if (index >= 0 && index < this.observerList.length) {
        this.observerList.splice(index, 1);
    }
};
ObserverList.prototype.indexOf = function (obj) {
    let i = 0;
    while (i < this.observerList.length) {
        if (this.observerList[i] === obj) {
            return i;
        }
        i++;
    }

    return -1;
}

// Subject
let ObservableTask = function (data) {
    Task.call(this, data);
    this.observers = new ObserverList();
};
ObservableTask.prototype.addObserver = function (observer) {
    this.observers.add(observer);
};
ObservableTask.prototype.notify = function (context) {
    for (let i = 0; i < this.observers.count(); i++) {
        // execute the observer function
        let observer = this.observers.get(i)(context);
    }
};
ObservableTask.prototype.removeObserver = function (observer) {
    this.observers.removeAt(this.observers.indexOf(observer));
};
ObservableTask.prototype.save = function () {
    this.notify(this);
    Task.prototype.save.call(this);
}

let notificationService = new NotificationService();
let loggingService = new LoggingService();
let auditingService = new AuditingService();

let myTask = new ObservableTask({ name: "'Go to the store and buy some beer'", user: "Shmuley" });

// Register observers
myTask.addObserver(notificationService.update);
myTask.addObserver(loggingService.update);
myTask.addObserver(auditingService.update);

myTask.save();

// Unregister observers
myTask.removeObserver(auditingService.update);

myTask.save();