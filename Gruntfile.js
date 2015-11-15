module.exports = function(grunt) {
    require("load-grunt-tasks")(grunt);

    grunt.initConfig({
        babel: require("./grunt-tasks/babel"),
        clean: require("./grunt-tasks/clean")
    });

    grunt.registerTask("dev", ["clean", "babel"]);
    grunt.registerTask("default", ["dev"]);
};
