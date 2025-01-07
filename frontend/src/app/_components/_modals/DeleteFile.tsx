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

export default function DeleteFile() {
	const { show, update, item } = useFileDeleteState(state => state)

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
					<Button onPress={() => update({ show: false })} color="danger">
						Confirm
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	)
}
