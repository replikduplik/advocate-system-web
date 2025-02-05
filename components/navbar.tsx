import Link from 'next/link';
import { Button } from './ui/button';

export default function Navbar() {
	return (
		<nav className="flex justify-between items-center px-4 border-b-2 h-16">
			<ul className="flex gap-4 ">
				<li>
					<Link href="/">Home</Link>
				</li>
				<li>
					<Link href="/about-us">About Us</Link>
				</li>
				<li>
					<Link href="/contact-us">Contact Us</Link>
				</li>
			</ul>
			<ul>
				<li>
					<Button asChild>
						<Link href="/auth/sign-in">Giriş Yap</Link>
					</Button>
				</li>
			</ul>
		</nav>
	);
}
