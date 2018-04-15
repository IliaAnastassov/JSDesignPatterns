let repo = function () {

    let called = 0;

    let save = function (task) {
        called++;
        console.log("Saveing " + task + " Called " + called + " times");
    }

    console.log("Newing up task repo");

    return {
        save: save
    }
}

module.exports = new repo;
