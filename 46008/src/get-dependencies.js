function getDependencies(tree) {
    let dependencies = [];
    dependenciesHelper(tree, dependencies);
    return dependencies.sort();
}

function dependenciesHelper(tree, dependencies) {
    // Check if the tree has dependencies
    if(Object.prototype.hasOwnProperty.call(tree, 'dependencies')) {
        // For each object in the dependency property
        Object.keys(tree['dependencies']).forEach((dependency) => {
            let dependencyObject = tree.dependencies[dependency];
            // Create the description that will be added to the array
            let description = dependency + '@' + dependencyObject.version;
            // If the description is not yet in the array, push it
            if(!dependencies.includes(description)) dependencies.push(description);
            // Repeat the process for the other dependencies 
            dependenciesHelper(dependencyObject, dependencies);
        });
    }
}

module.exports = getDependencies;