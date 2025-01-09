import { useDropzone } from "react-dropzone"
import Icons from "../../components/shared/Icons"
import { useCallback } from "react"
import { cn } from "@nextui-org/react"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { fileService } from "../../services/file.service"
import { queryKeys } from "../../constants/queryKeys"

export default function UploadFile() {
	const queryClient = useQueryClient()

	const mut = useMutation({
		mutationFn: fileService.post.one,
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: [queryKeys.FILES],
			})
		},
	})

	const onDrop = useCallback(
		(acceptedFiles: File[]) => {
			const formData = new FormData()
			formData.append("file", acceptedFiles[0])
			mut.mutate(formData)
		},
		[mut]
	)

	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		onDrop,
		multiple: false,
	})

	return (
		<section
			className={cn(
				`
					bg-slate-200/50 w-full p-2 rounded-lg flex items-center justify-center flex-col gap-2 border-dashed border-2 border-slate-400 h-[20vh] transition-all`,
				{
					"bg-blue-500/15 border-blue-500": isDragActive,
				}
			)}
			{...getRootProps()}
		>
			<input {...getInputProps()} />
			{!isDragActive ? (
				<>
					<Icons.FileTypes.Image className="size-12" />
					Drag n drop files here, or click to select files
				</>
			) : (
				<>
					<Icons.FileTypes.Image className="size-12" />
					Drop the files here
				</>
			)}
		</section>
	)
}
