import axios, { AxiosError } from "axios"

const client = axios.create({
	baseURL: import.meta.env.VITE_APP_API_URL,
	headers: {
		"Content-Type": "application/json",
		Accept: "application/json",
	},
})

client.interceptors.response.use(
	response => {
		return response
	},
	error => {
		if (error instanceof AxiosError) {
			console.log(error.response)
			if (error.response?.status === 401) {
				window.location.href = "/login"
				return Promise.reject(error)
			}
		}
		return Promise.reject(error)
	}
)

export default client
