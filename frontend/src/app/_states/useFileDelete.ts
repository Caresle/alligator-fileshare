import { create } from "zustand"
import { FileEntity } from "../../entities/file.entity"

interface FileDeleteState {
	show: boolean
	item: FileEntity
	update: (state: Partial<FileDeleteState>) => void
}

export const useFileDeleteState = create<FileDeleteState>(set => ({
	show: false,
	item: {} as FileEntity,
	update: data => set(data),
}))
