import {
	Button,
	Input,
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalHeader,
} from "@nextui-org/react"
import { useFileState } from "../../_states/useFileState"

export default function RenameModal() {
	const { show, update, item } = useFileState(state => state)

	return (
		<Modal
			isOpen={show}
			onOpenChange={state => update({ show: state })}
			size="lg"
		>
			<ModalContent>
				<ModalHeader>Rename File</ModalHeader>
				<ModalBody>
					<Input label="Old Name" disabled value={item.fileName} />
					<Input placeholder="Enter new name" label="New Name" />
				</ModalBody>
				<ModalFooter>
					<Button onPress={() => update({ show: false })}>Close</Button>
					<Button onPress={() => update({ show: false })} color="primary">
						Confirm
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	)
}
