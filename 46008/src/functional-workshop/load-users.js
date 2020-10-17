function loadUsers(userIds, load, done) {
    var users = [];

    let count = 0;
    userIds.forEach(user => {
        load(user, function(usr) {
            users.push(usr);
            if(count++ === userIds.length) done(users);
        });
    });
    return users;
}

module.exports = loadUsers;