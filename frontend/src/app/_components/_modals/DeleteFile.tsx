import {
	Button,
	Chip,
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalHeader,
} from "@nextui-org/react"
import { useFileDeleteState } from "../../_states/useFileDelete"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { fileService } from "../../../services/file.service"
import { queryKeys } from "../../../constants/queryKeys"
import { FileEntity } from "../../../entities/file.entity"

export default function DeleteFile() {
	const { show, update, item } = useFileDeleteState(state => state)
	const queryClient = useQueryClient()
	const mut = useMutation({
		mutationFn: fileService.delete.one,
		onSuccess: () => {
			console.log("success")
			queryClient.invalidateQueries({
				queryKey: [queryKeys.FILES],
			})
			update({ show: false, item: {} as FileEntity })
		},
	})

	const onSubmit = () => {
		mut.mutate(item.id)
	}

	return (
		<Modal
			isOpen={show}
			onOpenChange={state => update({ show: state })}
			size="xl"
		>
			<ModalContent>
				<ModalHeader>Delete File</ModalHeader>
				<ModalBody>
					<div>
						Are you sure you want to delete
						<Chip>{item.fileName}</Chip>?
					</div>
				</ModalBody>
				<ModalFooter>
					<Button onPress={() => update({ show: false })}>Close</Button>
					<Button onPress={onSubmit} color="danger">
						Confirm
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	)
}
