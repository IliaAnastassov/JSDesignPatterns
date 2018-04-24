let Task = function (data) {
    this.name = data.name;
    this.priority = data.priority;
    this.project = data.project;
    this.user = data.user;
    this.completed = data.completed;
};

function TaskCollection() {
    let tasks = {};
    let count = 0;

    let add = function (data) {
        tasks[data.name] = new Task(data);
        count++;
    };

    let get = function (name) {
        return tasks[name];
    }

    let getCount = function () {
        return count;
    };

    return {
        add: add,
        get: get,
        getCount: getCount
    }
}

let tasks = new TaskCollection();

let projects = ["educational", "work", "open source", "for fun"];
let priorities = [1, 2, 3, 4, 5];
let users = ["Eric", "Stan", "Kyle", "Kenny"];
let completed = [true, false];

let initialMemory = process.memoryUsage().heapUsed;

for (let i = 0; i < 1000000; i++) {
    tasks.add({
        name: "task" + i,
        priority: priorities[Math.floor(Math.random() * 5)],
        project: projects[Math.floor(Math.random() * 4)],
        user: users[Math.floor(Math.random() * 4)],
        completed: completed[Math.floor(Math.random() * 2)]
    });
}

let afterMemory = process.memoryUsage().heapUsed;

console.log("Memory used: " + (afterMemory - initialMemory) / 1000000 + " MB");
console.log("Tasks: " + tasks.getCount());
