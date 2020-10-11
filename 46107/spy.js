function Spy(target, method) {
    var meth = target[method];
    this.count = 0;
    var mySpy = this;
    target[method] = function() {
        mySpy.count++; 
        return meth.apply(this, arguments);
    };
    return this;
}

module.exports = Spy;