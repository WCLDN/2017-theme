'use strict';

module.exports = function(grunt) {
    require('matchdep').filterDev(['grunt-*', '!grunt-legacy-util']).forEach( grunt.loadNpmTasks );

    grunt.initConfig({

        sass: {
            build: {
                options: {
                    style: 'expanded',
                    unixNewlines: true,
                    lineNumbers: true
                },
                files: {
                    'build/style.css': 'src/style.scss'
                }
            }
        },

        watch: {
            sass: {
                files: 'src/**/*.scss',
                tasks: ['sass:build']
            }
        }
    });

    grunt.registerTask('default', [
        'sass:build',
        'watch'
    ]);

    grunt.registerTask('travis', [
        'sass:build'
    ]);
};