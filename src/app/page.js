'use client'
import { List } from '@/components'
import { status100, status200, status300, status400, status500 } from '@/data'
import { Switch, cn } from '@nextui-org/react'

export default function Home() {
	return (
		<main className="container mt-10 mx-auto">
			<div className="flex justify-between">
				<h1 className="text-primary text-xl">HTTP Status codes</h1>

				<Switch
					defaultSelected
					classNames={{
						wrapper: 'bg-red-500 [selected=true]:bg-green-500',
						startContent: 'text-white',
						endContent: 'text-white',
					}}
					startContent={
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
						>
							<path d="M12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18ZM11 1H13V4H11V1ZM11 20H13V23H11V20ZM3.51472 4.92893L4.92893 3.51472L7.05025 5.63604L5.63604 7.05025L3.51472 4.92893ZM16.9497 18.364L18.364 16.9497L20.4853 19.0711L19.0711 20.4853L16.9497 18.364ZM19.0711 3.51472L20.4853 4.92893L18.364 7.05025L16.9497 5.63604L19.0711 3.51472ZM5.63604 16.9497L7.05025 18.364L4.92893 20.4853L3.51472 19.0711L5.63604 16.9497ZM23 11V13H20V11H23ZM4 11V13H1V11H4Z"></path>
						</svg>
					}
					endContent={
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
						>
							<path d="M11.3807 2.01886C9.91573 3.38768 9 5.3369 9 7.49999C9 11.6421 12.3579 15 16.5 15C18.6631 15 20.6123 14.0843 21.9811 12.6193C21.6613 17.8537 17.3149 22 12 22C6.47715 22 2 17.5228 2 12C2 6.68514 6.14629 2.33869 11.3807 2.01886Z"></path>
						</svg>
					}
				></Switch>
			</div>

			<div className="grid grid-cols-3 gap-7 mt-7">
				<div className="space-y-7">
					<List title="1xx Informational" data={status100} color="primary" />
					<List title="2xx Succesful" data={status200} color="success" />
					<List title="3xx Redirection" data={status300} color="secondary" />
				</div>

				<div className="space-y-7">
					<List title="4xx Client Error" data={status400} color="warning" />
				</div>
				<div className="space-y-7">
					<List title="5xx Server Error" data={status500} color="danger" />
				</div>
			</div>
		</main>
	)
}
