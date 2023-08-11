import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./docs`;
const srcFolder = `./src`;

export const path = {
	build: {
		js: `${buildFolder}/js/`,
		images: `${buildFolder}/files/img/`,
		css: `${buildFolder}/css/`,
		html: `${buildFolder}/`,
		fonts: `${buildFolder}/fonts/`,
		files: `${buildFolder}/files/`
	},
	src: {
		js: `${srcFolder}/js/app.js`,
		images: `${srcFolder}/files/img/**/*.{jpg,png,gif,ico,webp,webmanifest,xml,json}`,
		svg: `${srcFolder}/img/**/*.svg`,
		css: `${srcFolder}/css/style.css`,
		html: `${srcFolder}/*.html`,
		files: `${srcFolder}/files/**/*.*`,
		fonts: `${srcFolder}/fonts/**/*.*`
	},
	watch: {
		js: `${srcFolder}/js/**/*.js`,
		images: `${srcFolder}/files/img/*.{jpg,png,svg,gif,ico,webp,webmanifest,xml,json}`,
		css: `${srcFolder}/css/**/*.css`,
		html: `${srcFolder}/**/*.html`,
		files: `${srcFolder}/files/**/*.*`
	},
	clean: buildFolder,
	buildFolder: buildFolder,
	srcFolder: srcFolder,
	rootFolder: rootFolder,
	ftp: ``
}
