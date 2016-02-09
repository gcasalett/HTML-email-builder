module.exports = function(grunt) {
grunt.initConfig({
      sass: {
        dist: {
          files: {
            'css/ink.css' : 'sass/*.scss'
          }
        }
      },
      uncss: {
        dist: {
          files: {
              'dist/css/tidy.css': ['source.html']
          }
        }
      },
      processhtml: {
        dist: {
          files: {
            'dist/email.html': ['source.html']
          }
        }
      },
      premailer: {
        main: {
          options: {
            verbose: true
          },
          files: {
            'dist/email-inline.html': ['dist/email.html']
          }
        }
      },
      watch: {
        files: ['source.html', 'css/ink.css', 'sass/**/*.scss'],
        tasks: ['sass', 'uncss', 'processhtml', 'premailer']
    }
});

grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-uncss');
grunt.loadNpmTasks('grunt-processhtml');
// WARNING: Premailer requires the nokogiri Gem. Install: $ gem install nokogiri
grunt.loadNpmTasks('grunt-premailer');
grunt.loadNpmTasks('grunt-contrib-watch');

grunt.registerTask('default', ['sass', 'uncss', 'processhtml', 'premailer', 'watch']);
};
