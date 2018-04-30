let myRepo = require("./Repo");

let taskHandler = function() {
    return {
        save: function () {
            myRepo.save("From taskHandler");
        }
    }
};

module.exports = new taskHandler;