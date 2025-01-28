import Link from 'next/link';

export default function Navbar() {
	return (
		<nav className="flex justify-between p-5">
			<ul className="flex gap-6">
				<li>
					<Link href="/">Home</Link>
				</li> 
				<li>
					<Link href="/about-us">Hakkımızda</Link>
				</li>
				<li>
					<Link href="/contact-us">İletişim</Link>
				</li>
			</ul>
			<ul>
				<li>
					<Link href="/auth/sign-in">Giriş</Link>
				</li>
			</ul>
		</nav>
	);
}
