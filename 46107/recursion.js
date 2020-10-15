function getDependencies(tree, isDependency, arr) {
    if (!tree) return;

    let res = arr || [];

    if (Object.keys(tree).includes('dependencies')) {
        res = getDependencies(tree.dependencies, true, res);
    }
    
    if (isDependency) {
        Object.keys(tree).forEach(function(prop) {
            let currProp = tree[prop];
            let str = prop + '@' + currProp.version;
            if (res.indexOf(str) === -1) res.push(str);
            if (Object.keys(currProp).includes('dependencies')) {
                getDependencies(currProp.dependencies, true, res);
            }
        });
    }
    return res.sort();
}

module.exports = getDependencies;