function Spy(target, method) {
    let toReturn = {count: 0};
    let func = target[method];

    target[method] = function() {
        func.apply(target, arguments);
        ++toReturn.count;
    };

    return toReturn;
}

module.exports = Spy;