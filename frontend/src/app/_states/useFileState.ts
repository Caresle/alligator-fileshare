import { create } from "zustand"
import { FileEntity } from "../../entities/file.entity"

interface FileState {
	show: boolean
	item: FileEntity
	update: (state: Partial<FileState>) => void
}

export const useFileState = create<FileState>(set => ({
	show: false,
	item: {} as FileEntity,
	update: data => set(data),
}))
