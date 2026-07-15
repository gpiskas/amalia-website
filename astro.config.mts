import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	site: 'https://amalia.gpiskas.com',
	vite: {
		plugins: [tailwindcss()],
	},
});
