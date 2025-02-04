'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';

export default function Navbar() {
	const [isLoginOpen, setIsLoginOpen] = useState(false);

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
					<Button onClick={() => setIsLoginOpen(true)}>Giriş</Button>
				</li>
			</ul>

			{isLoginOpen && (
				<div className= "absolute inset-0 flex justify-center items-center bg-black/20">
					<div className="popup-overlay border-2 bg-red-400 p-8 rounded-lg">
						<div className="popup-box">
							<button
								onClick={() => setIsLoginOpen(false)}
								className="close-button"
							>
								&times;
							</button>
							<h2>Giriş Yap</h2>
							<form>
								<Input  type="text" placeholder="Kullanıcı Adı" className='bg-white'/>
								<Input type="password" placeholder="Şifre" />
								<Button type="submit">Giriş Yap</Button>
							</form>
						</div>
					</div>
				</div>
			)}
		</nav>
	);
}
