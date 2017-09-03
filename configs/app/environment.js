const path = require('path');

const project = process.env.project;

// Determin if 'production'
const production = process.env.NODE_ENV === 'production';

// Project root
const root = path.resolve(__dirname, '../../');

// Distribution path
const distRoot = (production ? 'dev/web' : 'markup');
const dist = `${distRoot}/${project}`;

// Assets path
const assetsRoot = 'assets';
const assets = `${assetsRoot}/${project}`;

// Assets subfolders
const fonts = `${assetsRoot}/${project}/fonts`;
const html = `${assetsRoot}/${project}/html`;
const scripts = `${assetsRoot}/${project}/scripts`;
const static = `${assetsRoot}/${project}/static`;
const styles = `${assetsRoot}/${project}/styles`;
const svgs = `${assetsRoot}/${project}/svgs`;

module.exports = {
	project: project,
	production: production,
	publicPath: `/${project}`,
	root: root,
	dist: path.resolve(root, dist),
	distRoot: path.resolve(root, distRoot),
	assets: path.resolve(root, assets),
	assetsRoot: path.resolve(root, assetsRoot),
	fonts: path.resolve(root, fonts),
	html: path.resolve(root, html),
	scripts: path.resolve(root, scripts),
	static: path.resolve(root, static),
	styles: path.resolve(root, styles),
	svgs: path.resolve(root, svgs),
}
