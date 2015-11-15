module.exports = {
    options: {
        sourceMap: false,
        presets: ["es2015"]
    },
    dist: {
        files: [{
            expand: true,
            cwd: "./",
            src: ["src/**/*.js", "examples/**/*.js", "speedTest.js"],
            dest: "dist",
            ext: ".js"
        }]
    }
};
