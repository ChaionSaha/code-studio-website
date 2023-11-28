/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./views/**/*.{html,js,ejs}'],
	theme: {
		extend: {},
		screens: {
			sm: '576px',
			md: '768px',
			lg: '992px',
			xl: '1200px',
			'2xl': '1400px',
		},
	},

	plugins: [require('daisyui')],
	daisyui: {
		themes: [
			{
				myTheme: {
					primary: '#003077', // color blue
					secondary: '#2D2D2D', //color black
					accent: '#B31412', //color red
					neutral: '#185ABC',
					'base-100': '#ffffff',
					'base-200': '#FBFBFB',
				},
			},
		],
	},
};
