module.exports = function(grunt){


    grunt.initConfig({
        concat: {
			options:{
				separator:';'
			},
			dist:{
				src:['js/src/*.js'],
				dest: 'js/dist/script.main.js'
			},
		},
		uglify: {
			dist: {
				src: 'js/dist/script.main.js',
				dest: 'js/dist/script.main.min.js'
			}
		},
		concat_css: {
			options: {

			},
			all: {
			  src: ["css/src/*.css"],
			  dest: "css/styles.css"
			},
		},
		cssmin: {
			  target: {
				files: [{
				  expand: true,
				  src: ['css/styles.css'],
				  ext: '.min.css'
				}]
			}
		}
});


    grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-concat-css');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.registerTask('default', ['concat','uglify','concat_css','cssmin']);
	
};
