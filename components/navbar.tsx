import Link from 'next/link';
import { Button } from './ui/button';

export default function Navbar() {
	return (
		<nav className="flex justify-between items-center px-4 border-b-2 h-16">
			<ul className="flex gap-4 ">
				<li>
					<Button asChild>
						<Link href="/">Home</Link>
					</Button>
				</li>
				<li>
					<Button asChild>
						<Link href="/about-us">About Us</Link>
					</Button>
				</li>
				<li>
					<Button asChild>
						<Link href="/contact-us">Contact Us</Link>
					</Button>
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
