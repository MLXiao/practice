module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: './sass',
          src: ['**/*.scss'],
          dest: './css/source',
          ext: '.css'
        }]
      }
    },
    concat: {
      dist: {
        src: ['./css/source/**/*.css'],
        dest: './css/app.css',
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('default', ['sass', 'concat']);


};