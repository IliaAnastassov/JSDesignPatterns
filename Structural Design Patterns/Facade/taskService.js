let TaskService = function () {
    return {
        complete: function (task) {
            task.comleted = true;
            console.log("Completing task; " + task.name);
        },
        setCompleteDate: function (task) {
            task.completedDate = new Date();
            console.log(task.name + " completed on " + task.completedDate);
        },
        notifyCompletion: function (task, user) {
            console.log("Notifying " + user + " of completion of " + task.name);
        },
        save: function (task) {
            console.log("Saving task: " + task.name);
        }
    }
};

module.exports = TaskService();