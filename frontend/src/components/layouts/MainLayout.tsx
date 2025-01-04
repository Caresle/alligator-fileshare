import React from "react"
import TopBar from "../TopBar"

export default function MainLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div className="bg-slate-200 h-screen w-full p-2 gap-2">
			<TopBar />
			<div>{children}</div>
		</div>
	)
}
