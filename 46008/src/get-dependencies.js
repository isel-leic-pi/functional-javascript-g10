function getDependencies(tree) {
    let dependencies = [];
    dependenciesHelper(tree, dependencies);
    return dependencies;
}

function dependenciesHelper(tree, dependencies) {
    if(tree === undefined) {
        return dependencies;
    }
    let keys = Object.keys(tree);
    if(keys.includes('dependencies')){
        //obtain inner dependencies
        let dependency = tree['dependencies'];
    } 
    dependenciesHelper(undefined, dependencies);
}

var loremIpsum = {
    'name': 'lorem-ipsum',
    'version': '0.1.1',
    'dependencies': {
        'optimist': {
            'version': '0.3.7',
            'dependencies': {
                'wordwrap': {
                    'version': '0.0.2'
                }
            }
        },
        'inflection': {
            'version': '1.2.6'
        }
    }
};

getDependencies(loremIpsum); // => [ 'inflection@1.2.6', 'optimist@0.3.7', 'wordwrap@0.0.2' ]