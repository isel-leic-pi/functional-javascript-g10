const fileSystem = require('fs');

module.exports = function (dir, ext, callback) {
    // Filtered list of files as an array
    let files = fileSystem.readdir(dir, function(err, data) {
        if(err) return callback(err);
        callback(null, data.filter(file => file.split('.')[1] === ext));
    });
};