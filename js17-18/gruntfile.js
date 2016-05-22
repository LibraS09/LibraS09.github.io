module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['src/js/*.js'],
        dest: 'dest/script.main.js'
      }
    },
    uglify: {
      build: {
        src: 'dest/script.main.js',
        dest: 'dest/script.main.min.js'
      }
    },
    cssmin: {
      target: {
        files: {
        'dest/style.min.css' : ['src/css/*.css']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);

};
