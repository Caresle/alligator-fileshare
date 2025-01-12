import Icons from "../../components/shared/Icons"
import {
	Button,
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownTrigger,
} from "@nextui-org/react"
import { useFileDeleteState } from "../_states/useFileDelete"
import { useFileState } from "../_states/useFileState"
import { useMutation, useQuery } from "@tanstack/react-query"
import { queryKeys } from "../../constants/queryKeys"
import { fileService } from "../../services/file.service"
import { useMemo } from "react"
import { FileEntity } from "../../entities/file.entity"

const Actions = ({ item }: { item: FileEntity }) => {
	const { update } = useFileDeleteState(state => state)
	const { update: updateFile } = useFileState(state => state)
	const mut = useMutation({
		mutationFn: fileService.get.one,
	})

	const onDownload = () => {
		mut.mutate(item.id)
	}

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
					onPress={onDownload}
				>
					Download
				</DropdownItem>
				<DropdownItem
					onPress={() => updateFile({ show: true, item })}
					key={2}
					startContent={<Icons.Actions.Edit className="size-5" />}
				>
					Rename
				</DropdownItem>
				<DropdownItem
					onPress={() => update({ show: true, item })}
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
	const QFiles = useQuery({
		queryKey: [queryKeys.FILES],
		queryFn: fileService.get.all,
	})

	const data = useMemo(() => {
		return QFiles?.data ?? []
	}, [QFiles.data])

	if (QFiles.isLoading || QFiles.isRefetching) return <div>Loading...</div>

	return (
		<section className="flex-1 bg-slate-200 p-2 rounded-lg flex flex-col overflow-y-auto">
			<h1 className="text-2xl font-semibold">List of files</h1>
			<div
				className="flex-1 overflow-y-auto flex flex-col gap-2
            sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
        "
			>
				{data.map((file, i) => (
					<div
						key={i}
						className="flex items-center gap-2 p-2 bg-white rounded-lg w-full hover:cursor-pointer h-fit"
					>
						<Icons.FileTypes.Image className="size-12" />
						<div className="flex-1 flex flex-col w-full truncate">
							<div className="text-sm font-semibold truncate">
								{file.fileName}
							</div>
						</div>
						<Actions item={file} />
					</div>
				))}
			</div>
		</section>
	)
}
