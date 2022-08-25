var gulp = require('gulp');
const babel = require('gulp-babel');
const ts = require('gulp-typescript');
const babelConfig = require('./babel.config');

const tsProject = ts.createProject('tsconfig.json', { isolatedModules: false });
 
function compileJs(){
  return gulp.src('src/**/*.ts')
  .pipe(babel(babelConfig))
  .pipe(gulp.dest('dist'))
}

// 校验并生成类型声明文件
function generateDts(){
  var tsResult = gulp.src('src/**/*.ts')
      .pipe(tsProject());
  return tsResult.dts.pipe(gulp.dest('dist'))
}


const build = gulp.parallel(compileJs, generateDts);

module.exports.build = build
