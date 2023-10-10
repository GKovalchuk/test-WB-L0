import * as nodePath from "path";
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./docs`;
const srcFolder = `./src`;

export const path = {
	build: {
		js: `${buildFolder}/js/`,
		images: `${buildFolder}/files/img/`,
		css: `${buildFolder}/`,
		html: `${buildFolder}/`,
		fonts: `${buildFolder}/files/fonts/`,
		files: `${buildFolder}/files/`,
	},
	src: {
		js: `${srcFolder}/js/**/*.js`,
		images: `${srcFolder}/files/img/*.{jpg,png,svg,gif,ico,webp,webmanifest,xml,json}`,
		fonts: `${srcFolder}/files/fonts/`,
		css: `${srcFolder}/**/*.css`,
		html: `${srcFolder}/**/*.html`,
		files: `${srcFolder}/files/**/*.*`,
	},
	watch: {
		js: `${srcFolder}/js/**/*.js`,
		images: `${srcFolder}/files/img/*.{jpg,png,svg,gif,ico,webp,webmanifest,xml,json}`,
		fonts: `${srcFolder}/files/fonts/`,
		css: `${srcFolder}//**/*.css`,
		html: `${srcFolder}/**/*.html`,
		files: `${srcFolder}/files/**/*.*`,
	},
	clean: buildFolder,
	buildFolder: buildFolder,
	srcFolder: srcFolder,
	rootFolder: rootFolder,
	ftp: ``,
};
