export type ProjectCategory = 'Photography' | 'Videography' | 'Music Video' | 'Design';

export interface Project {
  id: string;
  slug: string;
  title: string;
  year: number;
  category: ProjectCategory;
  role: string;
  description: string;
  coverImage: { src: string; alt: string };
  galleryImages: Array<{ src: string; alt: string }>;
  credits: string[];
  tags: string[];
  location?: string;
}

const baseUrl = 'https://assets.nuviz.studio/placeholders';

export const photographyProjects: Project[] = [
  {
    id: 'photo-01',
    slug: 'lumen-portraits',
    title: 'Lumen Portraits',
    year: 2024,
    category: 'Photography',
    role: 'Lead Photographer',
    description: 'Moody portrait set capturing quiet confidence with rim light and sculpted shadows.',
    coverImage: { src: `${baseUrl}/photography-1.jpg`, alt: 'Studio portrait of an artist with dramatic lighting' },
    galleryImages: [
      { src: `${baseUrl}/photography-1a.jpg`, alt: 'Close portrait with soft falloff' },
      { src: `${baseUrl}/photography-1b.jpg`, alt: 'Profile view with rim light' },
      { src: `${baseUrl}/photography-1c.jpg`, alt: 'Hands adjusting lighting on set' }
    ],
    credits: ['Camera: Aria T.', 'Styling: Kemi Lowe', 'Retouch: nuViz team'],
    tags: ['Portrait', 'Studio', 'Editorial'],
    location: 'Brooklyn, NY'
  },
  {
    id: 'photo-02',
    slug: 'neon-nightwalk',
    title: 'Neon Nightwalk',
    year: 2023,
    category: 'Photography',
    role: 'Director of Photography',
    description: 'Late-night city study with reflective glass, neon spill, and brisk pacing.',
    coverImage: { src: `${baseUrl}/photography-2.jpg`, alt: 'Neon reflections in downtown street at night' },
    galleryImages: [
      { src: `${baseUrl}/photography-2a.jpg`, alt: 'Silhouette against neon sign' },
      { src: `${baseUrl}/photography-2b.jpg`, alt: 'Blurred traffic lights with long exposure' },
      { src: `${baseUrl}/photography-2c.jpg`, alt: 'Street fashion portrait with neon' }
    ],
    credits: ['Producer: Jonah W.', 'Color: nuViz Lab'],
    tags: ['Street', 'Color', 'Night']
  },
  {
    id: 'photo-03',
    slug: 'solstice-shores',
    title: 'Solstice Shores',
    year: 2022,
    category: 'Photography',
    role: 'Photographer',
    description: 'Coastal editorial exploring soft light, wind movement, and grounded posture.',
    coverImage: { src: `${baseUrl}/photography-3.jpg`, alt: 'Model on rocky shoreline during golden hour' },
    galleryImages: [
      { src: `${baseUrl}/photography-3a.jpg`, alt: 'Waves breaking behind subject' },
      { src: `${baseUrl}/photography-3b.jpg`, alt: 'Minimal styling with coastal textures' }
    ],
    credits: ['Stylist: Lo Rivera', 'HMU: Dae Song'],
    tags: ['Editorial', 'Landscape', 'Motion'],
    location: 'Big Sur, CA'
  }
];

export const videographyProjects: Project[] = [
  {
    id: 'video-01',
    slug: 'halcyon-brand-film',
    title: 'Halcyon Brand Film',
    year: 2024,
    category: 'Videography',
    role: 'Director & DP',
    description: 'Quiet brand film stitched from morning rituals and tactile product shots.',
    coverImage: { src: `${baseUrl}/video-1.jpg`, alt: 'Still from brand film featuring sunrise through window' },
    galleryImages: [
      { src: `${baseUrl}/video-1a.jpg`, alt: 'Pour-over coffee slow motion' },
      { src: `${baseUrl}/video-1b.jpg`, alt: 'Hands touching linen fabric' },
      { src: `${baseUrl}/video-1c.jpg`, alt: 'Wide shot of minimalist living room' }
    ],
    credits: ['Producer: Nia Park', 'Editor: nuViz Studio', 'Color: NVS Grade'],
    tags: ['Brand Film', 'Lifestyle', 'Color Grade'],
    location: 'Los Angeles, CA'
  },
  {
    id: 'video-02',
    slug: 'pulse-event-recap',
    title: 'Pulse Event Recap',
    year: 2023,
    category: 'Videography',
    role: 'Director',
    description: 'High-energy event film with handheld texture, layered audio, and quick punch edits.',
    coverImage: { src: `${baseUrl}/video-2.jpg`, alt: 'Crowd cheering at live event' },
    galleryImages: [
      { src: `${baseUrl}/video-2a.jpg`, alt: 'Performer on stage with lights' },
      { src: `${baseUrl}/video-2b.jpg`, alt: 'Audience reaction shot' }
    ],
    credits: ['1st AC: Lee Martin', 'Sound: Paloma Reyes'],
    tags: ['Event', 'Recap', 'Energy']
  }
];

export const musicVideoProjects: Project[] = [
  {
    id: 'mv-01',
    slug: 'midnight-parade',
    title: 'Midnight Parade',
    year: 2024,
    category: 'Music Video',
    role: 'Creative Director',
    description: 'Performance-driven music video blending kinetic camera moves with painterly lighting.',
    coverImage: { src: `${baseUrl}/mv-1.jpg`, alt: 'Artist performing under blue stage light' },
    galleryImages: [
      { src: `${baseUrl}/mv-1a.jpg`, alt: 'Behind the scenes lighting grid' },
      { src: `${baseUrl}/mv-1b.jpg`, alt: 'Choreography moment with spotlight' },
      { src: `${baseUrl}/mv-1c.jpg`, alt: 'Singer close-up with prism effect' }
    ],
    credits: ['Artist: LUNE', 'Choreography: The Grid', 'Editor: nuViz Post'],
    tags: ['Performance', 'Color', 'Motion']
  },
  {
    id: 'mv-02',
    slug: 'emberlines',
    title: 'Emberlines',
    year: 2022,
    category: 'Music Video',
    role: 'Director & DP',
    description: 'Narrative-driven piece with analog-inspired textures and grounded character work.',
    coverImage: { src: `${baseUrl}/mv-2.jpg`, alt: 'Two characters framed in warm backlight' },
    galleryImages: [
      { src: `${baseUrl}/mv-2a.jpg`, alt: 'Actor walking through foggy forest' },
      { src: `${baseUrl}/mv-2b.jpg`, alt: 'Gaffer adjusting tungsten practicals' }
    ],
    credits: ['Producer: Quinn Ford', 'Color: Amber Lab'],
    tags: ['Narrative', 'Analog', 'Story']
  }
];

export const designProjects: Project[] = [
  {
    id: 'design-01',
    slug: 'pulse-identity',
    title: 'Pulse Identity',
    year: 2024,
    category: 'Design',
    role: 'Art Director',
    description: 'Identity suite for an audio collective—monoline logotype, kinetic lines, vinyl-ready sleeves.',
    coverImage: { src: `${baseUrl}/design-1.jpg`, alt: 'Brand identity mockups with bold typography' },
    galleryImages: [
      { src: `${baseUrl}/design-1a.jpg`, alt: 'Business cards and logotype' },
      { src: `${baseUrl}/design-1b.jpg`, alt: 'Vinyl sleeve artwork with vibrant gradients' }
    ],
    credits: ['Design: nuViz Studio', 'Illustration: Ara M.'],
    tags: ['Branding', 'Print', 'Music']
  },
  {
    id: 'design-02',
    slug: 'signal-posters',
    title: 'Signal Posters',
    year: 2023,
    category: 'Design',
    role: 'Designer',
    description: 'Poster series for an avant festival—tight grids, metallic inks, deliberate negative space.',
    coverImage: { src: `${baseUrl}/design-2.jpg`, alt: 'Poster wall with bold graphic design' },
    galleryImages: [
      { src: `${baseUrl}/design-2a.jpg`, alt: 'Close up of metallic ink poster' },
      { src: `${baseUrl}/design-2b.jpg`, alt: 'Series of posters aligned on wall' }
    ],
    credits: ['Art Direction: nuViz Studio'],
    tags: ['Poster', 'Typography', 'Print'],
    location: 'Toronto, CA'
  }
];

export const allProjects: Project[] = [
  ...photographyProjects,
  ...videographyProjects,
  ...musicVideoProjects,
  ...designProjects
];
