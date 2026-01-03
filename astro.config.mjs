// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'MOQ Values Matter',
			social: [
				{
					icon: 'github',
					label: 'GitHub',
					href: 'https://github.com/moq-values-matter/moq-values-matter-site',
				},
			],
			sidebar: [
				{
					label: 'Fundamentals',
					autogenerate: { directory: 'fundamentals' },
				},
				{
					label: 'Value Atlas',
					autogenerate: { directory: 'atlas' },
				},
				{
					label: 'Essays',
					autogenerate: { directory: 'essays' },
				},
			],
		}),
	],
});
