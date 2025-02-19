import React from 'react';

export default function DashboardPage() {
	return (
		<div className="p-8 h-screen">
			<main className="flex flex-row border h-full bg-black rounded-3xl">
				<div className="flex flex-col w-1/4 bg-black rounded-l-3xl h-full justify-between items-center py-16">
					<img
						src="images/profile.jpg"
						alt="profile"
						className="rounded-3xl h-20 w-20"
					/>

					<ul className="flex flex-col p-4 justify-center align-top">
						<li className="p-2 text-slate-500"></li>
						<li className="p-2 text-slate-500">Dashboard</li>
						<li className="p-2 text-slate-500">Expenses</li>
						<li className="p-2 text-slate-500">Wallets</li>
						<li className="p-2 text-slate-500">Summary</li>
						<li className="p-2 text-slate-500">Accounts</li>
						<li className="p-2 text-slate-500">Settings</li>
					</ul>
				</div>
				<div className="flex flex-grow m-4 bg-white rounded-3xl">
					<div className="flex flex-col grow border-red-500 border-2 mx-24 my-16 ">
						<h2 className="text-lg font-bold">Expenses</h2>
						<ul className="flex flex-col">
				
							<li> Grocery</li>
							<li>Transportation</li>
							<li>Housing</li>
						</ul>
					</div>

					<div className="flex flex-col bg-slate-400 w-52">
						<h2 className="flex text-lg font-bold">Where Your Money Goes?</h2>
						<ul className="flex flex-col">
							<li>Food and Drinks</li>
							<li>Shopping</li>
							<li>Housing</li>
							<li>Transportation</li>
							<li>Vehicle</li>
						</ul>
					</div>
				</div>
			</main>
		</div>
	);
}
