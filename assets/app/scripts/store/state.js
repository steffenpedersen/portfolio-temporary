const state = {
	projects: [{
		type: 'web',
		id: 'web-1',
		img1: '/app/static/vuc-roskilde.png',
		img2: '/app/static/vucvest-sektion.png',
		name: 'VUC Fællesskaberne',
		company: 'Skybrud.dk',
		year: '2017',
		tech: 'HTML, SCSS, AngularJS, Browsersupport',
		link: 'www.vucvest.dk',
		http: 'http://www.vucvest.dk',
		desc: 'VUC Fællesskaberne er en løsning ved Skybrud.dk. Det er en større løsning, som omfatter 10 hjemmesider med mulighed for tilvalg af layout og design. Jeg udførte en gennemgang af koden til frontend. Dette indebar at jeg omskrev HTML, SCSS og AngularJS hvor det var nødvendigt. Jeg udførte også browsersupport.',
	},
	{
		type: 'web',
		id: 'web-2',
		img1: '/app/static/sfi.png',
		img2: '/app/static/sfi-sektion.png',
		name: 'SFI- Det Nationale Forskningscenter for Velfærd',
		company: 'Skybrud.dk',
		year: '2017',
		tech: 'HTML, SCSS, AngularJS, Browsersupport',
		link: 'www.sfi.dk',
		http: 'http://www.sfi.dk',
		desc: 'SFI er en også en hjemmeside, hvor jeg udførte en gennemgang af koden til frontend. Her tilpassede og forbedrede jeg HTML, SCSS og components ved AngularJS. Jeg udførte også browsersupport.',
	},
	{
		type: 'web',
		id: 'web-3',
		img1: '/app/static/broed-start2.png',
		img2: '/app/static/broed-intro.png',
		name: 'Brød & Co.',
		company: 'Skybrud.dk',
		year: '2017',
		tech: 'HTML, SCSS, JavaScript, ES6, Vue.js, TweenLite, webpack, Browsersupport',
		link: 'www.steffenp.dk/broed',
		http: 'http://www.steffenp.dk/broed',
		desc: 'Jeg har udviklet en prototype af en hjemmeside til Brød & Co. Her opsatte jeg al kode til frontend. Jeg brugte Yarn til dependencies og Webpack til den generelle opbygning. Jeg brugte naturligvis HTML, SCSS og JavaScript. Her valgte jeg Vue.js til framework med components og directives. Jeg brugte den nyeste version af JavaScript, hvormed Babel blev brugt af komprimering til ES5. TweenLite blev brugt til animation. Jeg udførte også browsersupport.',
	},
	{
		type: 'web',
		id: 'web-4',
		img1: '/app/static/flowmaster.png',
		img2: '/app/static/dlrt-blog.png',
		name: 'Flowmaster, WP',
		company: 'DLRT',
		year: '2015-',
		tech: 'HTML, SCSS, JavaScript, jQuery, WordPress',
		link: 'www.flowmaster.dk',
		http: 'http://www.flowmaster.dk',
		desc: 'DLRT er en mindre virksomhed, som jeg har oprettet med en anden webudvikler. Vi startede den i forbindelse med praktik i egen virksomhed ved multimediedesigneruddannelsen. Vi har her lavet en hjemmeside for en anden virksomhed og eksperimenteret med WordPress ved egne plugins og themes. Vi har ikke brugt virksomheden aktivt i en længere periode grundet videre uddannelse, men har holdt den åben for support.',
	},
	{
		type: 'design',
		id: 'design-1',
		img1: '/app/static/hbp-posters.png',
		img2: '/app/static/happy_sportswearint.jpg',
		name: 'Etsy',
		company: 'Happy Bear Prints',
		year: '2014-2017',
		tech: 'Adobe Illustrator, Adobe Photoshop, kundekontakt',
		link: 'www.happybearprints.etsy.com',
		http: 'http://www.happybearprints.etsy.com',
		desc: '',
	},
	],
};

export default state;
