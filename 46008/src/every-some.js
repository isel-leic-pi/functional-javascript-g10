function checkUsersValid(goodUsers) {

    /*
    Return a function that takes a list of valid users, and returns a function that returns true 
    if all of the supplied users exist in the original list of users.

    You only need to check that the ids match.

    */
    return function allUsersValid(submittedUsers) {
        return submittedUsers.every(id => goodUsers.some(goodId => id == goodId));
    };
}

module.exports = checkUsersValid;