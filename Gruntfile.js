module.exports = function(grunt) {
    require("load-grunt-tasks")(grunt);

    grunt.initConfig({
        webpack: require("./grunt-tasks/webpack")
    });

    grunt.registerTask("dev", ["webpack"]);
    grunt.registerTask("default", ["dev"]);
};
