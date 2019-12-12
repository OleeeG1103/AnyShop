var gulp = require("gulp"),
    sass = require("gulp-sass"),
    concat = require("gulp-concat"),
    imagemin = require("gulp-imagemin"),
    pngquant = require("imagemin-pngquant"),
    browserSync = require("browser-sync").create();


gulp.task("sass", function () {
    return gulp.src("src/scss/style.scss")  // беру scss
        .pipe(sass().on("error", sass.logError)) // компилирую в css
        .pipe(concat("index.css")) // меняю имя (из телеграма style в index :) )
        .pipe(gulp.dest("src/css")); // скидую результаты в src/css

});

gulp.task("watch", function () {
    gulp.watch("src/scss/*.scss", gulp.series("sass")); // компилируем на автомате

});

gulp.task("cssDist", function () {
    return gulp.src("src/css/index.css")  // если все гуд беру уже готовые стили css
        .pipe(gulp.dest("dist/css")); // скидую в dist

});

gulp.task("jsDist", function () {
    return gulp.src("src/js/*.js")
        .pipe(gulp.dest("dist/js"));

});

gulp.task("fontsDist", function () {
    return gulp.src("src/fonts/**/*")
        .pipe(gulp.dest("dist/fonts"));

});

gulp.task("htmlDist", function () {
    return gulp.src("src/*.html")
        .pipe(gulp.dest("dist"));

});

gulp.task("imgDist", function() {
    return gulp.src("src/img/**/*.*")
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()],
            interlaced: true
        }))
        .pipe(gulp.dest("dist/img"));

});

gulp.task("serve",function () {
    browserSync.init({
        server: "src"
    });
    browserSync.watch("src/**/*.*").on("change", browserSync.reload);
});

gulp.task("default", gulp.parallel("sass", "watch", "serve"));











