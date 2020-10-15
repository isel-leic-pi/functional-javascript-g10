function checkUsersValid(goodUsers) {
    return function allUsersValid(submittedUsers) {
        return submittedUsers
            .every(user => 
                goodUsers.some(validUser => (user == validUser))
            );
    };
}

module.exports = checkUsersValid;