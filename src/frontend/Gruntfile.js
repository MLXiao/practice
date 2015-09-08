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
      target: {
        files: [{
          expand: true,
          cwd: './css',
          src: ['*.css', '!*.min.css'],
          dest: './css',
          ext: '.min.css'
        }]
      }
    },

    watch: {
      css: {
        files: ['./sass/**/*.scss'],
        tasks: ['sass', 'concat', 'cssmin']
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['watch']);
};