let TaskService = require("./taskService");

let TaskServiceWrapper = function () {

    let completeAndNotify = function (task) {
        TaskService.complete(task);
        if (task.comleted) {
            TaskService.setCompleteDate(task);
            TaskService.notifyCompletion(task, task.user);
            TaskService.save(task);
        }
    };

    return {
        completeAndNotify: completeAndNotify
    }
};

module.exports = TaskServiceWrapper();