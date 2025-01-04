import React from "react"
import { createBrowserRouter, RouteObject } from "react-router-dom"
import Icons from "../components/shared/Icons"
import HomePage from "../app/page"

export type RouteObjectWithMeta = RouteObject & {
	meta?: {
		showInNavbar: boolean
		name?: string
		icon?: React.ReactNode
	}
}

const routesApp: RouteObjectWithMeta[] = [
	{
		path: "/",
		element: <HomePage />,
		meta: {
			showInNavbar: true,
			name: "Home",
			icon: <Icons.Navbar.Dashboard />,
		},
	},
	{
		path: "*",
		element: <>NOT FOUND</>,
		meta: {
			showInNavbar: false,
		},
	},
]

export const routesNavbar: RouteObjectWithMeta[] = routesApp.filter(
	route => route.meta?.showInNavbar
)

export const router = createBrowserRouter(routesApp)
