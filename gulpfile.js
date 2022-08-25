var gulp = require('gulp');
const babel = require('gulp-babel');
const babelConfig = require('./babel.config');
 
function compileJs(){
  return gulp.src('src/**/*.ts')
  .pipe(babel(babelConfig))
  .pipe(gulp.dest('dist'))
}


const build = gulp.parallel(compileJs);

module.exports.build = build
