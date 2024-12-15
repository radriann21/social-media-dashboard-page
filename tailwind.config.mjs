/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: "selector",
	theme: {
		extend: {
			colors: {
				primary: {
					'lime-green': 'hsl(163, 72%, 41%)',
					'bright-red': 'hsl(356, 69%, 56%)',
					'facebook-blue': 'hsl(208, 92%, 53%)',
					'twitter-blue': 'hsl(203, 89%, 53%)',
					'youtube-red': 'hsl(348, 97%, 39%)',
					'instagram-gradient': 'linear gradient hsl(37, 97%, 70%) to hsl(329, 70%, 58%)',
					'toggle-dark': 'linear gradient hsl(210, 78%, 56%) to hsl(146, 68%, 55%)',
					'toggle-light': 'hsl(230, 22%, 74%)'
				},
				dark: {
					'very-dark-blue-bg': 'hsl(230, 17%, 14%)',
					'very-dark-blue-top': 'hsl(232, 19%, 15%)',
					'dark-desaturated-blue': 'hsl(228, 28%, 20%)',
					'desaturated-blue': 'hsl(228, 34%, 66%)'
				},
				light: {
					'very-pale-blue-top': 'hsl(225, 100%, 98%)',
					'light-grayish-blue': 'hsl(227, 47%, 96%)',
					'dark-grayish-blue': 'hsl(228, 12%, 44%)',
					'very-dark-blue-light': 'hsl(230, 17%, 14%)'
				}
			},
			fontFamily: {
				'global': "'Inter', sans-serif"
			}
		},
	},
	plugins: [],
}
