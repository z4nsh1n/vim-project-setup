module.exports = function(grunt){
require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

// Configure Grunt
grunt.initConfig({

// Grunt express - our webserver
// https://github.com/blai/grunt-express
express: {
    all: {
        options: {
            bases: ['src'],
            port: 8080,
            hostname: "0.0.0.0",
            livereload: true
        }
    }
},

// grunt-watch will monitor the projects files
// https://github.com/gruntjs/grunt-contrib-watch
watch: {
    all: {
            files: '**/*.html',
            options: {
                livereload: true
        }
    },
    less: {
        files: 'src/css/**/*.less',
        tasks: ['less']
    }
},

// grunt-open will open your browser at the project's URL
// https://www.npmjs.org/package/grunt-open
open: {
    all: {
        path: 'http://localhost:8080/index.html'
    }
},

less: {
    //import all styles in style.less
    build:{
        files: {
            'src/css/style.css': 'src/css/style.less'
        }
    }
}

});


// Creates the `server` task
grunt.registerTask('server', [
    'express',
    'open',
    'watch'
    ]);
};

