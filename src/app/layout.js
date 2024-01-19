import { Inter } from 'next/font/google'
import './main.css'
import { Providers } from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'Lista de códigos HTTP',
	description:
		'Este es un listado de códigos de respuesta HTTP explicados en español.',
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${inter.className}`}>
				<Providers>{children}</Providers>
			</body>
		</html>
	)
}
