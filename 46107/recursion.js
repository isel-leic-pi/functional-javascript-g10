function getDependencies(tree, name) {
    if (!tree) return;
    
    let keys = Object.keys(tree);

    var arr = [];
    if (keys.includes('dependencies')) {
        keys = Object.keys(tree.dependencies);
        arr = getDependencies(tree.dependencies[keys[0]], keys[0]);
        if (keys.length > 1) {
            arr = arr.concat(getDependencies(tree.dependencies[keys[1]], keys[1]));
        }
    }

    if (!name) {
        return arr.sort();
    } else {
        arr.push(name + '@' + tree.version);
        return arr.sort();
    }
}

var test = {
    version: '0.1.1',
    dependencies: {
        optimist: { version: '0.3.7', dependencies: [Object] },
        inflection: { version: '1.2.6' }
    }
};

//console.log(getDependencies(test));

module.exports = getDependencies;