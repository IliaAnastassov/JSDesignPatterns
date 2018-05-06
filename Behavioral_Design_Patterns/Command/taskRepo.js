let repo = {
    tasks: {},
    commands: [],
    get: function (id) {
        console.log("Getting task " + id + " from the database");
        return {
            id: id,
            name: "New task from database"
        }
    },
    save: function (task) {
        this.tasks[task.id] = task;
        console.log("Saving " + task.name + " to the database");
    }
};

repo.execute = function (name) {
    let args = Array.prototype.slice.call(arguments, 1);

    this.commands.push({
        name: name,
        task: args[0]
    });

    if (this[name]) {
        this[name].apply(this, args);
    }
};

repo.executeNoLog = function (name) {
    let args = Array.prototype.slice.call(arguments, 1);

    if (this[name]) {
        this[name].apply(this, args);
    }
};

repo.replay = function () {
    for (let i = 0; i < this.commands.length; i++) {
        let command = this.commands[i];
        this.executeNoLog(command.name, command.task);
    }
}

repo.execute("save", {
    id: 1,
    name: "Task 1"
});

repo.execute("save", {
    id: 2,
    name: "Task 2"
});

repo.execute("save", {
    id: 3,
    name: "Task 3"
});

console.log(repo.tasks);

repo.tasks = {};
console.log(repo.tasks);

repo.replay();
console.log(repo.tasks);
