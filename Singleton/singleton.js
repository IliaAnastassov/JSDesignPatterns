let TaskRepo = (function () {
    let taskRepo;

    function createRepo() {
        let taskRepo = new Object("Task");
        return taskRepo;
    }

    return {
        getInstance: function () {
            if (!taskRepo) {
                taskRepo = createRepo();
            }

            return taskRepo;
        }
    }
}());

let task1 = TaskRepo.getInstance();
let task2 = TaskRepo.getInstance();

if (task1 === task2) {
    console.log("Same object");
}
