import { FileEntity } from "../entities/file.entity"
import client from "../lib/axios"

const BASE_ROUTE = "/files"

export const fileService = {
	get: {
		async all(): Promise<FileEntity[]> {
			try {
				const response = await client.get(`${BASE_ROUTE}`)
				return response.data
			} catch (error) {
				console.log(error)
				return []
			}
		},
		async one(id: string): Promise<void> {
			try {
				const response = await client.get(`${BASE_ROUTE}/${id}`, {
					responseType: "blob",
				})

				const url = window.URL.createObjectURL(new Blob([response.data]))
				const link = document.createElement("a")
				link.href = url
				link.setAttribute(
					"download",
					`${Date.now().toString()}.${response.data.type?.split("/")?.[1]}`
				)
				document.body.appendChild(link)
				link.click()
				link.remove()
			} catch (error) {
				console.error(error)
			}
		},
	},
	post: {
		one: async (formData: FormData) => {
			try {
				await client.post(`${BASE_ROUTE}`, formData, {
					headers: {
						"Content-Type": "multipart/form-data",
					},
				})
			} catch (error) {
				console.error(error)
			}
		},
	},
	delete: {
		one: async (id: string) => {
			try {
				await client.delete(`${BASE_ROUTE}/${id}`)
			} catch (error) {
				console.error(error)
			}
		},
	},
}
