import React from "react"
import { createBrowserRouter, RouteObject } from "react-router-dom"
import Icons from "../components/shared/Icons"

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
		element: <>HOME PAGE</>,
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
