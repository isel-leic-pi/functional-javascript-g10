function loadUsers(userIds, load, done) {
    let users = [];

    for (let i = 0; i < userIds.length; i++) {
        load(userIds[i], function result(user) {
            users.push(user);

            if (users.length >= userIds.length)
                done(users);
        });
    }

    return users;
}

module.exports = loadUsers;