export interface Creator {
	slug: string;
	name: string;
	discipline: string;
	tagline: string;
	bio: string;
	image?: string;
	links?: { label: string; url: string }[];
}

export interface Project {
	slug: string;
	title: string;
	category: string;
	description: string;
	image?: string;
	creators?: string[]; // slugs
}

// Placeholder creators — replace with real data / CMS
export const creators: Creator[] = [
	{
		slug: 'cintha-nijgh',
		name: 'Cintha Nijgh',
		discipline: 'Visual Design & Art Direction',
		tagline: 'Shaping brands through image and instinct',
		bio: 'Digital designer with a sharp eye for identity systems and visual storytelling. Has shaped visual identities for Patta, Henk at Home, and more. Thinks in mood boards, delivers in pixels.',
	},
	{
		slug: 'creator-2',
		name: 'Coming Soon',
		discipline: 'Sound Design & Synthesis',
		tagline: 'Frequencies that move spaces',
		bio: 'Details coming soon.',
	},
	{
		slug: 'creator-3',
		name: 'Coming Soon',
		discipline: 'Spatial & Set Design',
		tagline: 'Building worlds from raw material',
		bio: 'Details coming soon.',
	},
];

export const projects: Project[] = [
	{
		slug: 'project-1',
		title: 'Project One',
		category: 'Branding',
		description: 'Visual identity and brand direction.',
		creators: ['cintha-nijgh'],
	},
	{
		slug: 'project-2',
		title: 'Project Two',
		category: 'Digital Design',
		description: 'Digital experience and interface design.',
		creators: ['cintha-nijgh'],
	},
];

export function getCreator(slug: string): Creator | undefined {
	return creators.find((c) => c.slug === slug);
}

export function getProject(slug: string): Project | undefined {
	return projects.find((p) => p.slug === slug);
}
