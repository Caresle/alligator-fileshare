import {
	Button,
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownTrigger,
} from "@nextui-org/react"
import Icons from "./shared/Icons"

export default function Navbar() {
	return (
		<aside className="bg-white p-2 rounded-lg border">
			<Dropdown>
				<DropdownTrigger>
					<Button isIconOnly color="primary">
						<Icons.Actions.Add className="size-6" />
					</Button>
				</DropdownTrigger>
				<DropdownMenu aria-label="Create new folder of specific type of files">
					<DropdownItem key="new_folder">
						<div className="flex items-end gap-2">
							<Icons.FileTypes.Folder className="size-5" />
							Create new folder
						</div>
					</DropdownItem>
				</DropdownMenu>
			</Dropdown>
		</aside>
	)
}
