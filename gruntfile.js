module.exports = function(grunt) {
	// Project configuration.
	grunt.initConfig({
	pkg: grunt.file.readJSON('package.json'),	

		// jshint modulke
		jshint:{
			options: {   
		    	//reporter: require('jshint-stylish')
		    },
		    main:[
		    	'assets/js/*.js'
		    ]
		},

		// uglify js
		uglify:{
			all: {
		        files: [{
		            expand: true,
		            cwd: 'assets/js',
		            src: '**/*.js',
		            dest: 'scripts',
		            ext: '.min.js'
		        }]
		    }
		},

		// sass module
		sass: {
			dev:{
		        options: {
		        	paths:['assets/sass'],
		            sourceMap: true
		        },		        
	            files: {
	                'css/prod.css': 'assets/sass/main.scss'
	            }		        
		    },
		    prod:{
		    	options:{
		    		paths:['css'],
		    		sourceMap:false
		    	},
		    	files: {
		    		'css/prod.css': 'assets/sass/main.scss'
		    	}
		    }
		},

		// watch module
		watch: {
			options:{
				spawn: false,
				livereload:true
			},
			scripts:{
				files:['assets/js/*.js'],
				tasks:['jshint'],
			},
			sass:{
				files:['assets/sass/**/*.scss'],
				tasks:['sass:dev'],
			},
		},
    });
	// Load the plugin that provides the "uglify" task.
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');    

	// Default task(s).
	grunt.registerTask('default', ['jshint','sass','uglify']);	
};