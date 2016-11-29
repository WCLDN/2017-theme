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

		postcss: {
			options: {
				map: true,
				processors: [
					require('autoprefixer')({
					  	browsers: ['last 5 versions']
					})
				]
			},
			dist: {
				src: 'build/style.css'
			}
		},

		watch: {
			sass: {
				files: 'src/**/*.scss',
				tasks: [
					'scsslint',
					'sass:build',
				  	'postcss'
				]
			}
		}
	});

	grunt.registerTask('default', [
		'scsslint',
		'sass:build',
		'postcss',
		'watch'
	]);

	grunt.registerTask('travis', [
		'sass:build',
		'postcss'
	]);
};
