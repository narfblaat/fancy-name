module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      files: [ 'Gruntfile.js', 'index.js' ],
      options: {
        jshintrc: true
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('default', [ 'jshint' ]);

};
