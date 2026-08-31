export type NavLink = {
	href: string;
	label: string;
};

export const NAV_LINKS: NavLink[] = [
	{ href: "/about", label: "About" },
	{ href: "/projects", label: "Projects" },
	{ href: "/photography", label: "Photography" },
	{ href: "/blog", label: "Blog" },
];

export function findNavLabel(pathSegment: string): string | undefined {
	const normalized = `/${pathSegment}`;
	return NAV_LINKS.find((link) => link.href === normalized)?.label;
}
