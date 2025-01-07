import MainLayout from "../components/layouts/MainLayout"
import DeleteFile from "./_components/_modals/DeleteFile"
import RenameModal from "./_components/_modals/RenameModal"
import FileList from "./_components/FileList"
import UploadFile from "./_components/UploadFile"

export default function HomePage() {
	return (
		<MainLayout>
			{/* Modals */}
			<RenameModal />
			<DeleteFile />
			<div className="bg-white rounded-lg p-2 gap-2 flex-1 shadow flex flex-col overflow-y-auto">
				<UploadFile />
				<FileList />
			</div>
		</MainLayout>
	)
}
