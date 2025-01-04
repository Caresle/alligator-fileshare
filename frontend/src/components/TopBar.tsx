import { Avatar, Input } from "@nextui-org/react"

const AppLogo = () => {
	return (
		<div className="flex items-center gap-2">
			<Avatar name="Alligator" />
			<div>Alligator Fileshare</div>
		</div>
	)
}

const SearchSection = () => {
	return (
		<div>
			<Input placeholder="Search..." />
		</div>
	)
}

export default function TopBar() {
	return (
		<div className="bg-white p-2 rounded-lg shadow flex items-center gap-2 justify-between">
			<AppLogo />
			<SearchSection />
		</div>
	)
}
