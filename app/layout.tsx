import AuthContext from "./(site)/context/AuthContext"
import ToasterContext from "./(site)/context/ToasterContext"
import type {Metadata} from "next"
import {Inter} from "next/font/google"
import "./globals.css"


const inter = Inter({subsets: ["latin"]})

export const metadata: Metadata =
{
	title: "Crowd Teams",
	description: "Crowd Teams",
}

export default function RootLayout({children}: {children: React.ReactNode}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<AuthContext>
					<ToasterContext/>
					{children}
				</AuthContext>
			</body>
		</html>
	)
}
