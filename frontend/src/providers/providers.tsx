import React from "react"
import { NextUIProvider } from "@nextui-org/react"
import TanstackProvider from "./transtack-query"

export default function Providers({ children }: { children: React.ReactNode }) {
	return (
		<NextUIProvider>
			<TanstackProvider>{children}</TanstackProvider>
		</NextUIProvider>
	)
}
