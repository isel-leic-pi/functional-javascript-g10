function checkUsersValid(goodUsers) {
    return function allUsersValid(submittedUsers) {
        return submittedUsers.every(usr => goodUsers.some(goodUsr => goodUsr.id === usr.id));
    };
}

module.exports = checkUsersValid;