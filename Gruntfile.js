module.exports = function (grunt) {
  'use strict';

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Connect Server
    connect: {
      server: {
        options: {
          port: 3000,
          base: '.'
        }
      }
    },

    // Clean Project
    clean: {
      release: [
        'LICENSE',
        'package.json',
        'bower.json', '.bowerrc',
        '.gitignore', '.gitmodules',
        '*.jade', 'lib',
        'scss', '*.scss', '*.sass', '*.map', '.sass-cache',
        'bower_components', 'Gruntfile.js', 'node_modules',
      ],

      build: [
        '.sass-cache',
        'bower_components', 'components',
        'node_modules'
      ]
    },

    // Jade
    jade: {
      dev: {
        options: {
          pretty: true,
          data: {
            debug: true,
          }
        },
        files: {
          'index.html': 'index.jade'
        }
      },

      dist: {
        options: {
          pretty: true,
          data: {
            debug: false
          }
        },
        files: {
          'index.html': 'index.jade'
        }
      }
    },

    // HTMLmin
    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        files: {
          'index.html': 'index.html',
        }
      }
    },

    // Sass
    sass: {
      dev: {
        options: {
          precision: 6,
          sourcemap: 'auto',
          style: 'expanded',
        },
        files: {
          'assets/css/style.css': 'assets/scss/style.scss'
        }
      },
      dist: {
        options: {
          precision: 10,
          sourcemap: 'none',
          style: 'compact',
          trace: false,
          noCache: true
        },
        files: {
          'assets/css/style.css': 'assets/scss/style.scss'
        }
      },
    },

    // Post CSS
    postcss: {
      dist: {
        options: {
          map: false,
          processors: [
            require('autoprefixer')({
              browsers: ['last 2 versions']
            })
          ]
        },
        files: 'assets/css/style.css'
      }
    },

    // CSSMin
    cssmin: {
      dist: {
        options: {
          sourceMap: false,
          shorthandCompacting: false,
          roundingPrecision: -1
        },
        files: 'assets/css/style.css'
      }
    },

    // Wiredep
    wiredep: {
      dev: {
        options: {
          dependencies: true,
          devDependencies: true,
          'overrides': {
            'waypoints': {
              'main': [
                "lib/jquery.waypoints.min.js"
              ]
            },
            'font-awesome': {
              'main': [
                'less/font-awesome.less',
                'scss/font-awesome.scss',
                'css/font-awesome.css'
              ]
            }
          }
        },
        src: [
          '{,*/,*/*/}*.jade'
        ],
      }
    },

    // Notification
    notify: {
      options: {
        title: 'GruntJS'
      },
      build: {
        options: {
          message: 'Project has been built.'
        }
      },
      release: {
        options: {
          message: 'Project has been built & cleaned up.'
        }
      },
      server: {
        options: {
          message: 'Grunt has been activated.'
        }
      },
      grunt: {
        options: {
          message: 'Grunt has been updated.'
        }
      },
      jade: {
        options: {
          message: 'Jade files has been compiled.'
        }
      },
      sass: {
        options: {
          message: 'Sass files has been compiled.'
        }
      },
      js: {
        options: {
          message: 'JavaScript files has been checked.'
        }
      }
    },

    // Watch
    watch: {
      options: {
        livereload: true,
        dateFormat: function (time) {
          grunt.log.writeln('Grunt has finished compiling in ' + time + 'ms!');
          grunt.log.writeln('Preparing for next task...');
        },
        event: ['all']
      },
      configFiles: {
        files: ['Gruntfile.js'],
        tasks: ['notify:grunt'],
        options: {
          reload: true
        }
      },
      sass: {
        files: '{,*/,*/*/,*/*/*/,*/*/*/*/,*/*/*/*/*/}*.{scss,sass}',
        tasks: ['sass:dev', 'notify:sass'],
      },
      jade: {
        files: '{,*/,*/*/,*/*/*/,*/*/*/*/,*/*/*/*/*/}*.jade',
        tasks: ['jade:dev', 'wiredep', 'notify:jade'],
      },
      js: {
        files: '**/*.js',
        tasks: ['notify:js']
      }
    }
  });

  grunt.registerTask('release', ['jade:dist', 'htmlmin:dist', 'sass:dist', 'postcss:dist', 'cssmin:dist', 'notify:release', 'clean:release']);
  grunt.registerTask('build', ['jade:dev', 'sass:dev', 'notify:build']);
  grunt.registerTask('default', ['connect:server', 'notify:server', 'watch']);
};