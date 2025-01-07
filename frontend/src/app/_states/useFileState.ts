import { create } from "zustand"

interface FileState {
	show: boolean
	update: (state: Partial<FileState>) => void
}

export const useFileState = create<FileState>(set => ({
	show: false,
	update: data => set(data),
}))
