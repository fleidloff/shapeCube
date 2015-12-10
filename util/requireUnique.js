function requireUnique(path) {
    const o = require(path);
    delete require.cache[require.resolve(path)];

    return o;
}

module.exports = requireUnique;
