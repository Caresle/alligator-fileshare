import { create } from "zustand"

interface FileDeleteState {
	show: boolean
	update: (state: Partial<FileDeleteState>) => void
}

export const useFileDeleteState = create<FileDeleteState>(set => ({
	show: false,
	update: data => set(data),
}))
