import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardTitle,
	CardFooter,
	CardHeader,
} from '@/components/ui/card';

import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';

export default function SignInPage() {
	return (
		<Card className="w-80 mx-auto mt-14">
			<CardHeader>
				<CardTitle>Sign In</CardTitle>
			</CardHeader>
			<CardContent className="flex flex-col gap-4">
				<Input placeholder="Kullanıcı Adı veya E-posta" />
				<Input placeholder="Şifre" />
				<div className="flex items-center justify-center gap-2">
					<label htmlFor="accountType">Bireysel</label>
					<Switch id="accountType" />
					<label htmlFor="accountType">Kurumsal</label>
				</div>
			</CardContent>
			<CardFooter>
				<Button className="w-full">Giriş Yap</Button>
			</CardFooter>
		</Card>
	);
}
