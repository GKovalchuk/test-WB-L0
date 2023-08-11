import rename from 'gulp-rename';
import webpcss from 'gulp-webpcss'; // вывод webp изображенй
import concatCss from 'gulp-concat-css';
import autoprefixer from 'gulp-autoprefixer'; // автопрефиксер
import gcmq from 'gulp-group-css-media-queries'; // группировка медиа запросов

export const css = () => {
	return app.gulp.src(app.path.src.css, { sourcemaps: true })
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: "CSS",
				message: "Error: <%= error.message %>"
			})))
		.pipe(concatCss("style.css"))
		.pipe(webpcss(
			{
				webpClass: ".webp",
				noWebpClass: ".no-webp"
			}
		))
		.pipe(autoprefixer({
			grid: true,
			overrideBrowserslist: ["last 3 versions"],
			cascade: true
		}))
		.pipe(gcmq())
		.pipe(rename({
			extname: ".min.css"
		}))
		.pipe(app.gulp.dest(app.path.build.css))
		.pipe(app.plugins.browsersync.stream());
}