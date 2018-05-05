let Task = require("./task");

// Observers
let NotificationService = function () {
    let message = "Notifying ";
    this.update = function (task) {
        console.log(message + task.user + " for task " + task.name);
    }
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

// Mediator
let mediator = (function () {
    this.channels = {};

    this.subscribe = function (channel, context, func) {
        if (!this.channels[channel]) {
            this.channels[channel] = [];
        }

        this.channels[channel].push({
            context: context,
            func: func
        });
    };

    let publish = function (channel) {
        if (!this.channels[channel]) {
            return;
        }

        let args = Array.prototype.slice.call(arguments, 1);

        for (let i = 0; i < this.channels[channel].length; i++) {
            let sub = this.channels[channel][i];
            sub.func.apply(sub.context, args);
        }
    };

    return {
        channels: {},
        subscribe: subscribe,
        publish: publish
    };
}());

let task1 = new Task({
    name: "'Clean the car'",
    user: "Dildo"
});

let notificationService = new NotificationService();
let loggingService = new LoggingService();
let auditingService = new AuditingService();

mediator.subscribe("save", notificationService, notificationService.update);
mediator.subscribe("save", loggingService, loggingService.update);
mediator.subscribe("save", auditingService, auditingService.update);

task1.save = function () {
    mediator.publish("save", task1);
    Task.prototype.save.call(this);
}

task1.save();