import type { AstroInstance } from 'astro';
import { Instagram } from 'lucide-astro';

export interface SocialLink {
	name: string;
	url: string;
	icon: AstroInstance;
}

export default {
	title: 'By Amalia · Art Studio',
	owner: 'Amalia Karachaliou',
	favicon: 'favicon.png',
	profileImage: 'profile.jpg',
	socialLinks: [
		{
			name: 'Instagram',
			url: 'https://www.instagram.com/byamalia.artstudio/',
			icon: Instagram,
		} as SocialLink,
	],
};
