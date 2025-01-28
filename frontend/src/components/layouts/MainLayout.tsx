import React from "react"
import TopBar from "../TopBar"
import Navbar from "../Navbar"

export default function MainLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div className="bg-slate-200 h-screen w-full p-2 gap-2 flex">
			<Navbar />
			<div className="flex flex-1 flex-col gap-2">
				<TopBar />
				<div className="flex-1 flex flex-col overflow-y-auto">{children}</div>
			</div>
		</div>
	)
}
