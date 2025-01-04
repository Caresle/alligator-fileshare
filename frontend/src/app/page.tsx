import MainLayout from "../components/layouts/MainLayout"
import FileList from "./_components/FileList"
import UploadFile from "./_components/UploadFile"

export default function HomePage() {
	return (
		<MainLayout>
			<div className="bg-white rounded-lg p-2 gap-2 flex-1 shadow flex flex-col overflow-y-auto">
				<UploadFile />
				<FileList />
			</div>
		</MainLayout>
	)
}
