function getDependencies(tree, isDependency, result) {
    if (!tree)
        return;
    
    let toReturn = result || [];
    let keys = Object.keys(tree);

    // Get Main dependencies
    if (keys.includes('dependencies')) {
        toReturn = getDependencies(tree.dependencies, true, toReturn);
    }

    if (isDependency) {
        keys.forEach(depName => {
            let dependency = tree[depName];
            let depStr = depName + '@' + dependency.version;
            
            // Check if dependency is already in result
            if (result.indexOf(depStr) === -1)
                toReturn.push(depStr);
            
            // Check for sub-dependencies
            if (Object.keys(dependency).includes('dependencies'))
                getDependencies(dependency.dependencies, true, toReturn);
        });
    }

    return toReturn.sort();
}

module.exports = getDependencies;