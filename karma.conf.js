// karma.conf.js
module.exports = function(config) {
    config.set({
        browsers: ['Chrome'],
        frameworks: ['jasmine', 'browserify'],
        files: [
            './test/*.js'
        ],
        preprocessors: {
            './test/*.js': [ 'browserify' ]
        },
        browserify: {
            debug: true,
            transform: [['babelify', {presets: ['es2015']}]]
        },
        reporters: ['kjhtml']
    })
};