import Icons from "../../components/shared/Icons"
import {
	Button,
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownTrigger,
} from "@nextui-org/react"
import { useFileDeleteState } from "../_states/useFileDelete"

const Actions = () => {
	const { update } = useFileDeleteState(state => state)

	return (
		<Dropdown>
			<DropdownTrigger>
				<Button isIconOnly variant="flat">
					<Icons.MenuType.Horizontal />
				</Button>
			</DropdownTrigger>
			<DropdownMenu>
				<DropdownItem
					key={1}
					startContent={<Icons.Actions.Download className="size-5" />}
				>
					Download
				</DropdownItem>
				<DropdownItem
					key={2}
					startContent={<Icons.Actions.Edit className="size-5" />}
				>
					Rename
				</DropdownItem>
				<DropdownItem
					onPress={() => update({ show: true })}
					key={3}
					startContent={<Icons.Actions.Delete className="size-5" />}
				>
					Delete
				</DropdownItem>
			</DropdownMenu>
		</Dropdown>
	)
}

export default function FileList() {
	return (
		<section className="flex-1 bg-slate-200 p-2 rounded-lg flex flex-col overflow-y-auto">
			<h1 className="text-2xl font-semibold">List of files</h1>
			<div
				className="flex-1 overflow-y-auto flex flex-col gap-2
            sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
        "
			>
				{Array.from({ length: 100 }).map((_, i) => (
					<div
						key={i}
						className="flex items-center gap-2 p-2 bg-white rounded-lg w-full hover:cursor-pointer"
					>
						<Icons.FileTypes.Image className="size-12" />
						<div className="flex-1 flex flex-col w-full truncate">
							<div className="text-sm font-semibold truncate">{i}.png</div>
							<div className="text-xs text-slate-400">{i} MB</div>
						</div>
						<Actions />
					</div>
				))}
			</div>
		</section>
	)
}
