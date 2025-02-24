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
						<li className="flex items-center gap-3 p-2 text-slate-500"></li>
						<li className="flex items-center gap-3 p-2 text-slate-500 font-bold">
							Dashboard
						</li>
						<li className="flex items-center gap-3 p-2 text-slate-500 font-bold">
							Expenses
						</li>
						<li className="flex items-center gap-3 p-2 text-slate-500 font-bold">
							Wallets
						</li>
						<li className="flex items-center gap-3 p-2 text-slate-500 font-bold">
							Summary
						</li>
						<li className="flex items-center gap-3 p-2 text-slate-500 font-bold">
							Accounts
						</li>
						<li className="flex items-center gap-3 p-2 text-slate-500 font-bold">
							Settings
						</li>
					</ul>
				</div>
				<div className="flex flex-grow m-4 bg-white rounded-3xl">
					<main className="flex flex-col grow border-red-500 border-2 mx-16 my-8 ">
						<div>
							<h2 className="text-lg font-bold">Expenses</h2>
						</div>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<div className="bg-white p-6 w-full">
								<h3 className="text-lg font-semibold">Today</h3>
								<ul>
									<li className="flex py-2 border-b">
										<img src="images/utensils.png" alt="food-and-drinks" />
										<p>Grocery</p>
										<p className="text-red-500 ml-50">-326.800</p>
									</li>
									<li className="flex justify-between py-2 border-b">
										<img
											src="./public/images/transportation.svg"
											alt="transportation"
										/>
										<p>Transportation</p>
										<p className="text-red-500">-15.000</p>
									</li>
									<li className="flex justify-between py-2">
										<p>Housing</p>
										<p className="text-red-500">-185.750</p>
									</li>
								</ul>
							</div>

							<div className="flex flex-col bg-[#F9FAFC] w-52 ml-24 gap-4">
								<h2 className="flex text-md font-bold">
									Where Your Money Goes?
								</h2>
								<ul className="flex flex-col bg-white">
									<li className="flex justify-between py-2">
										<p>Food and Drinks</p>
										<p className="font-bold">872.400</p>
									</li>
									<li className="flex justify-between py-2">
										<p>Shopping</p>
										<p className="font-bold">1.378.200</p>
									</li>
									<li className="flex justify-between py-2">
										<p>Housing</p>
										<p className="font-bold">928.500</p>
									</li>
									<li className="flex justify-between py-2">
										<p>Transportation</p>
										<p className="font-bold">420.700</p>
									</li>
									<li className="flex justify-between py-2">
										<p>Vehicle</p>
										<p className="font-bold">520.000</p>
									</li>
								</ul>
								
								<div className="flex flex-col border-2 bg-gray-100 rounded-2xl shadow-lg gap-4 w-52 h-50 p-4">
									<div className="flex justify-center -mt-12 gap-4">
										<img
											src="images/img-1.png"
											alt="Illustration"
											className="w-14 h-18"
										/>
										<img
											src="images/img-2.png"
											alt="Illustration"
											className="w-14 h-18"
										/>
									</div>
									<h2 className="text-lg font-bold text-gray-900">
										Save More Money
									</h2>
									<p className="text-gray-500 text-sm">
										Lorem ipsum dolor sit amet consectetur adipisicing elit
									</p>
									<div className="flex flex-col items-center">
										<button className="bg-black text-white px-4 py-1 rounded-lg text-sm font-semibold">
											VIEW TIPS
										</button>
									</div>
								</div>
							</div>
						</div>
					</main>
				</div>
			</main>
		</div>
	);
}
