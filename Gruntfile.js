module.exports = function(grunt) {
    require("load-grunt-tasks")(grunt);

    grunt.initConfig({
        babel: require("./grunt-tasks/babel"),
        clean: require("./grunt-tasks/clean"),
        watch: require("./grunt-tasks/watch")
    });

    grunt.registerTask("dev", ["babel"]);
    grunt.registerTask("default", ["clean", "dev", "watch"]);
};
