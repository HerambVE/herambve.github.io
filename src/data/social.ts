export type SocialLink = {
	label: string;
	href: string;
	icon: "mail" | "github" | "twitter" | "rss" | "linkedin" | "resume";
	external?: boolean;
};

export const SOCIAL_LINKS: SocialLink[] = [
	{
		label: "Email",
		href: "mailto:vengurlekarheramb19@gmail.com",
		icon: "mail",
		external: false,
	},
	{
		label: "GitHub",
		href: "https://github.com/HerambVE",
		icon: "github",
		external: true,
	},
	{
		label: "LinkedIn",
		href: "https://www.linkedin.com/in/herambve/",
		icon: "linkedin",
		external: true,
	},
	{
		label: "Resume",
		href: "https://herambve.github.io/resume/",
		icon: "resume",
		external: true,
	},
	{
		label: "RSS",
		href: "/rss.xml",
		icon: "rss",
		external: false,
	},
];
