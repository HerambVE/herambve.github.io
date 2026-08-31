export type PhotoItem = {
	id: string;
	title: string;
	src: string;
	alt: string;
	caption: string;
	location?: string;
	date?: string;
};

export const PHOTOGRAPHY_CONFIG = {
	title: "Photography",
	description: "Visual frames, street perspectives, architecture, and fleeting moments captured through the lens.",
	subheading: "A collection of frames, textures, light, and visual experiments captured across cities, nature, and everyday life.",
};

export const PHOTOS: PhotoItem[] = [
	{
		id: "photo-1",
		title: "Luminescence & Petals",
		caption: "Warm tea-lights nestled among fresh marigolds, capturing the quiet glow of Diwali festivities.",
		location: "Mumbai, India",
		src: "/photography/1.jpg",
		alt: "Glowing tea-light candles placed over orange flower petals during Diwali.",
	},
	{
		id: "photo-2",
		title: "Monsoon Horizons",
		caption: "Overcast skies meeting vibrant riverbanks and rolling hills after a continuous downpour.",
		location: "River Valley",
		src: "/photography/2.jpg",
		alt: "Panoramic landscape of a river and lush green hills under overcast monsoon skies.",
	},
	{
		id: "photo-3",
		title: "Misty Ridges",
		caption: "Dense veils of mountain fog drifting through the high forest canopies along the ridges.",
		location: "Hill Station",
		src: "/photography/3.jpg",
		alt: "Fog-shrouded mountain range seen through silhouette tree branches.",
	},
	{
		id: "photo-4",
		title: "Café Geometry",
		caption: "Striking violet-textured walls juxtaposed with lush monstera foliage and vintage street signage.",
		location: "Mumbai, India",
		src: "/photography/4.jpg",
		alt: "Café corner with vibrant purple wall, green potted plants, and vintage signs.",
	},
	{
		id: "photo-5",
		title: "Forest Bloom",
		caption: "Intricate layers of wild ruffled bracket fungi colonizing ancient root systems on the damp forest floor.",
		location: "Nature Trail",
		src: "/photography/5.jpg",
		alt: "Wild bracket mushrooms growing abundantly on tree roots in the woods.",
	},
	{
		id: "photo-6",
		title: "Pastoral Solitude",
		caption: "Cattle grazing peacefully across vast emerald grasslands bordered by dense tropical tree lines.",
		location: "Rural Countryside",
		src: "/photography/6.jpg",
		alt: "Cattle and a villager in a vast green meadow against a dark forest backdrop.",
	},
	{
		id: "photo-7",
		title: "Above the Clouds",
		caption: "Cruising at 35,000 feet—where sharp aircraft wing geometry intersects an endless ocean of clouds.",
		location: "In Flight",
		src: "/photography/7.jpg",
		alt: "Airplane winglet rising above fluffy white clouds under deep blue stratosphere.",
	},
	{
		id: "photo-8",
		title: "Hilltop Skeleton",
		caption: "The weathered metallic framework of an abandoned shelter standing sentinel over rolling green hills.",
		location: "Hill Station",
		src: "/photography/8.jpg",
		alt: "Abandoned metal pavilion structure perched on a grassy hill knoll.",
	},
	{
		id: "photo-9",
		title: "Twilight Crescent",
		caption: "A slender silver crescent moon suspended in deep twilight blues, framed by flowering tree canopies.",
		location: "Mumbai, India",
		src: "/photography/9.jpg",
		alt: "Crescent moon centered in a blue dusk sky framed by canopy leaves.",
	},
	{
		id: "photo-10",
		title: "Golden Hour Drift",
		caption: "Warm evening sunlight setting the edges of drifting cumulus clouds ablaze against deep azure skies.",
		location: "Skyline",
		src: "/photography/10.jpg",
		alt: "Grainy aesthetic cloud illuminated by golden hour light against a deep blue backdrop.",
	},
	{
		id: "photo-11",
		title: "Nocturnal Blossoms",
		caption: "Streetlit pink trumpet blossoms stretching upwards into the quiet darkness of a starry midnight sky.",
		location: "Mumbai, India",
		src: "/photography/11.JPG",
		alt: "Pink blossom tree reaching up towards a starry night sky.",
	},
	{
		id: "photo-12",
		title: "Mountain Sunset",
		caption: "Golden evening sunburst setting through pine and oak canopies above a hillside shelter in Mussoorie.",
		location: "Mussoorie, Uttarakhand",
		src: "/photography/12.JPG",
		alt: "Golden sunset sunburst setting behind mountain trees and a hillside cabin in Mussoorie.",
	},
	{
		id: "photo-13",
		title: "Lohri Night Fire",
		caption: "Towering flames and cascading ember sparks illuminating the night during Lohri celebrations near Landour.",
		location: "Near Landour, Uttarakhand",
		src: "/photography/13.JPG",
		alt: "Towering Lohri festival bonfire with embers and sparks shooting into the night sky near Landour.",
	},
	{
		id: "photo-14",
		title: "Cascade in Sunlight",
		caption: "Water cascading down sheer dark basalt cliff faces, with bright afternoon sunlight illuminating the fine spray.",
		location: "Waterfall Trail",
		src: "/photography/IMG_3036.jpg",
		alt: "Backlit waterfall cascading down basalt cliffs under bright midday sun.",
	},
	{
		id: "photo-15",
		title: "Coastal Breeze",
		caption: "A windswept palm tree overlooking shimmering ocean waves breaking on rocky shores.",
		location: "Coastal Shore",
		src: "/photography/IMG_5852.jpg",
		alt: "Windblown palm tree against a glittering sunlit sea and rocky coastline.",
	},
	{
		id: "photo-16",
		title: "Garden Ganesha",
		caption: "A weathered stone sculpture of Lord Ganesha adorned with fresh marigolds, nestled within lush fern foliage.",
		location: "Garden Courtyard",
		src: "/photography/IMG_6618.jpg",
		alt: "Stone idol of Lord Ganesha with yellow marigolds and a brass diya among green ferns.",
	},
	{
		id: "photo-17",
		title: "Coastal Highway Horizon",
		caption: "The coastal road viaduct stretching across Mumbai's shoreline under pastel sunset clouds.",
		location: "Mumbai, India",
		src: "/photography/IMG_6707.jpg",
		alt: "Mumbai coastal road viaduct over the sea with pastel pink evening clouds and flying birds.",
	},
	{
		id: "photo-18",
		title: "ASCII Portrait",
		caption: "A monochrome text-rendered ASCII art portrait exploring typography, negative space, and tonal shading.",
		location: "Digital Canvas",
		src: "/photography/IMG_6770.jpg",
		alt: "Monochrome text-based ASCII art portrait on a dark background.",
	},
	{
		id: "photo-19",
		title: "Overlook",
		caption: "Taking in the panoramic monsoon expanse over lush green valley slopes on a recent mountain trek.",
		location: "Mountain Trail",
		src: "/photography/IMG_6894.jpg",
		alt: "Heramb on a recent mountain trek, sitting on a rocky ledge overlooking green hills and a distant valley.",
	},
];
