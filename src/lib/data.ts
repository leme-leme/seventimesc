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

export const creators: Creator[] = [
	{
		slug: 'cintha-nijgh',
		name: 'Cintha Nijgh',
		discipline: 'Visual Design & Art Direction',
		tagline: 'Shaping brands through image and instinct',
		bio: 'Digital designer with a sharp eye for identity systems and visual storytelling. Has shaped visual identities for Patta, Henk at Home, and more. Thinks in mood boards, delivers in pixels.',
	},
	{
		slug: 'alex-eagle',
		name: 'Alex Eagle',
		discipline: 'Curator',
		tagline: 'Where taste meets intention',
		bio: 'Creative director and curator known for bridging fashion, interiors and culture through a singular lens of refined taste.',
	},
	{
		slug: 'daniel-arsham',
		name: 'Daniel Arsham',
		discipline: 'Artist',
		tagline: 'Eroding the line between art and architecture',
		bio: 'Artist working across architecture, performance and sculpture. Known for creating ambiguous, time-bending objects that challenge how we perceive the built world.',
	},
	{
		slug: 'camille-rowe',
		name: 'Camille Rowe',
		discipline: 'Model & Muse',
		tagline: 'Effortless style rooted in curiosity',
		bio: 'Model, actress and creative who moves between fashion, film and cultural commentary with an unmistakable eye for the understated.',
	},
	{
		slug: 'ramdane-touhami',
		name: 'Ramdane Touhami',
		discipline: 'Creative Director',
		tagline: 'Reinventing craft through relentless curiosity',
		bio: 'Multi-disciplinary creative known for reimagining heritage brands. From perfumery to publishing, he approaches every project with obsessive attention to detail.',
	},
	{
		slug: 'gia-coppola',
		name: 'Gia Coppola',
		discipline: 'Film Director',
		tagline: 'Stories told in light and texture',
		bio: 'Filmmaker and photographer whose work blends intimacy with visual poetry, capturing contemporary culture through a distinctly personal gaze.',
	},
	{
		slug: 'john-pawson',
		name: 'John Pawson',
		discipline: 'Architect & Designer',
		tagline: 'Clarity through reduction',
		bio: 'Celebrated British architect known for minimalist architecture, timeless interiors, and the art of refined simplicity across sacred and secular spaces.',
	},
	{
		slug: 'amelie-pichard',
		name: 'Amélie Pichard',
		discipline: 'Designer',
		tagline: 'Subversive elegance, handmade with soul',
		bio: 'Paris-based designer and one of the subversive minds of fashion, blending punk sensibility with sustainable craftsmanship.',
	},
	{
		slug: 'andre-saraiva',
		name: 'André Saraiva',
		discipline: 'Artist',
		tagline: 'Painting the world, one wall at a time',
		bio: 'Graffiti artist, hotelier and cultural impresario who has blurred the boundaries between street culture, fine art and social spaces for over two decades.',
	},
	{
		slug: 'laila-gohar',
		name: 'Laila Gohar',
		discipline: 'Cook & Food Artist',
		tagline: 'Turning food into a language of wonder',
		bio: 'Food artist whose sculptural, site-specific installations and gatherings reimagine the way we experience eating, community and spectacle.',
	},
	{
		slug: 'hans-ulrich-obrist',
		name: 'Hans Ulrich Obrist',
		discipline: 'Curator',
		tagline: 'Connecting ideas across every border',
		bio: 'One of the most influential figures in contemporary art. Curator, writer and tireless convener of conversations between artists, architects, scientists and thinkers.',
	},
	{
		slug: 'kengo-kuma',
		name: 'Kengo Kuma',
		discipline: 'Architect',
		tagline: 'Architecture that breathes with nature',
		bio: 'Japanese architect renowned for merging natural materials, traditional craft and cutting-edge design into structures that dissolve the boundary between building and landscape.',
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
