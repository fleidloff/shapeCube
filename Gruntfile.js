module.exports = function(grunt) {
    require("load-grunt-tasks")(grunt);

    grunt.initConfig({
        babel: require("./grunt-tasks/babel"),
        clean: require("./grunt-tasks/clean"),
        watch: require("./grunt-tasks/watch")
    });

    grunt.registerTask("build", ["clean:dist", "babel:dist"]);
    grunt.registerTask("test", ["build", "clean:test", "babel:test"]);
    grunt.registerTask("default", ["build", "watch"]);
};
