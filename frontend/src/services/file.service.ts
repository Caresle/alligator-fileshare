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
	},
}
