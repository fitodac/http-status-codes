'use client'
import { useEffect, useState } from 'react'
import { DarkModeSwitch, List } from '@/components'
import { status100, status200, status300, status400, status500 } from '@/data'
import { Link } from '@nextui-org/react'

export default function Home() {
	const [init, setInit] = useState(false)

	useEffect(() => {
		setTimeout(() => setInit(true), 300)
	}, [])

	if (!init) return <></>

	return (
		<main
			className={`pt-10 pb-32 transition-opacity opacity-0 dark:bg-slate-900 dark:text-slate-300 ${
				init ? 'opacity-100' : ''
			}`}
		>
			<div className="container mx-auto">
				<div className="flex justify-between">
					<h1 className="text-primary text-xl">HTTP Status codes</h1>
					<DarkModeSwitch />
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
			</div>

			<div className="text-sm text-center text-slate-400 mt-20">
				por{' '}
				<Link
					href="https://fitodac.com"
					target="_blank"
					size="sm"
					color="default"
				>
					@fitodac
				</Link>
			</div>
		</main>
	)
}
