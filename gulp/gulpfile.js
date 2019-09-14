const gulp = require("gulp");
const babel = require("gulp-babel");
const fs = require("fs");
const package = require("../package");

gulp.task("build", () =>
{
    gulp.src(["../src/Authorized/**/*.d.ts"]).pipe(gulp.dest("../publish"));
    gulp.src(["../*.md"]).pipe(gulp.dest("../publish"));
    gulp.src(["../LICENSE"]).pipe(gulp.dest("../publish"));
    const {name,version}=package;
    if (!fs.existsSync("../publish"))
    {
        fs.mkdirSync("../publish");
    }
    fs.writeFileSync("../publish/package.json",JSON.stringify({
        name,version
    }));
    return gulp
        .src(["../src/Authorized/**/*.js"])
        .pipe(babel({
            "presets": [
                [
                    "@babel/env",
                    {
                        "loose": true,
                        "targets": {
                            "esmodules": true
                        }
                    }
                ],
                "@babel/preset-react"
            ],
            "plugins": [
                "@babel/plugin-proposal-class-properties"
            ]
        }))
        .pipe(gulp.dest("../publish"));
});