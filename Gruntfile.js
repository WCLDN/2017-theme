'use strict';

module.exports = function (grunt) {
	require('matchdep').filterDev(['grunt-*', '!grunt-legacy-util']).forEach(grunt.loadNpmTasks);

	grunt.initConfig({

		scsslint: {
			build: {
				src: [
					'src/*.scss'
				],
				options: {
					config: '.scss-lint.yml',
					colorizeOutput: true
				}
			}
		},

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
				tasks: [
					'scsslint',
					'sass:build'
				]
			}
		}
	});

	grunt.registerTask('default', [
		'scsslint',
		'sass:build',
		'watch'
	]);

	grunt.registerTask('travis', [
		'sass:build'
	]);
};
