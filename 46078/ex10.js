module.exports = function (namespace) {
    const consoleLog = console.log;
    return consoleLog.bind(console, namespace);
};