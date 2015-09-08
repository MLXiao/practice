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
    // uglify: {
    //   my_target: {
    //     files: {
    //       './js/a.min.js': ['./js/a.js']
    //     }
    //   }
    // }
    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'output.css': ['foo.css', 'bar.css']
        }
      },
      target: {
        files: [{
          expand: true,
          cwd: './css',
          src: ['*.css', '!*.min.css'],
          dest: './css',
          ext: '.min.css'
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['sass', 'concat', 'cssmin']);


};