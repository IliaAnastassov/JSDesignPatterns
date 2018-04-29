let Task = function (data) {
    this.name = data.name;
    this.flyweight = FlyweightFactory.get(data.project, data.priority, data.user, data.completed);
};

let Flyweight = function (project, priority, user, completed) {
    this.project = project;
    this.priority = priority;
    this.user = user;
    this.competed = completed;
}

let FlyweightFactory = function () {
    let flyweights = {};

    let get = function (project, priority, user, completed) {
        if (!flyweights[project + priority + user + completed]) {
            flyweights[project + priority + user + completed] = new Flyweight(project, priority, user, completed);
        }

        return flyweights[project + priority + user + completed];
    };

    let getCount = function () {
        let count = 0;
        for (let f in flyweights) {
            count++;
        }

        return count;
    };

    return {
        get: get,
        getCount: getCount
    }
}();

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
console.log("Flyweights: " + FlyweightFactory.getCount());
