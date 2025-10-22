export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about-us" },
  { label: "Services", href: "/our-services" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact", href: "/contact-us" },
];
