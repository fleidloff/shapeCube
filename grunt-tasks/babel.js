module.exports = {
    options: {
        sourceMap: false,
        presets: ["es2015"]
    },
    dist: {
        files: [{
            expand: true,
            cwd: "./",
            src: ["src/**/*.js", "examples/**/*.js"],
            dest: "dist",
            ext: ".js"
        }]
    },
    test: {
        files: [{
            expand: true,
            cwd: "./test",
            src: ["**/*.js"],
            dest: "test-dist",
            ext: ".js"
        }]
    }
};
