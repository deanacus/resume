const gulp = require( 'gulp' );
const nunjucks = require( 'gulp-nunjucks-render' );
const sass = require( 'gulp-sass' );

const input = {
	'content': __dirname + '/src/content/**/*.njk',
	'templates': __dirname + '/src/templates/',
	'scss': __dirname + '/src/scss/*.scss',
};

const output = {
	'content': __dirname + '/build/',
	'css': 'build/assets/css/',
};

// Compile content
gulp.task( 'content', function() {
	gulp.src( input.content )
	  .pipe( nunjucks( {
			path: [
				input.templates,
			],
	  } ) )
	  .pipe( gulp.dest( output.content ) );
} );

// Compile SASS
gulp.task( 'sass', function() {
	gulp.src( input.scss )
		.pipe( sass() )
		.pipe( gulp.dest( output.css ) );
} );

// Copy fonts
gulp.task( 'fonts', function() {
	gulp.src( input.fonts )
		.pipe( gulp.dest( output.fonts ) );
} );

gulp.task( 'prod', [
	'content',
	'sass',
	'fonts',
	'upload',
] );

gulp.task( 'default', [
	'content',
	'sass',
] );