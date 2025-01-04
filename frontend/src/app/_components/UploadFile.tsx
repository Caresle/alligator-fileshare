import Icons from "../../components/shared/Icons"

export default function UploadFile() {
	return (
		<section
			className="bg-slate-200/50 w-full p-2 rounded-lg flex items-center justify-center flex-col gap-2 border-dashed border-2 border-slate-400
    h-[20vh]"
		>
			<Icons.FileTypes.Image className="size-12" />
			Upload file
		</section>
	)
}
