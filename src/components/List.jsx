import {
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Divider,
	Accordion,
	AccordionItem,
	Chip,
} from '@nextui-org/react'

export const List = ({ title, data, color }) => {
	return (
		<Card
			classNames={{
				base: 'dark:bg-black/30',
			}}
		>
			<CardHeader>
				<h3 className={`text-${color}`}>{title}</h3>
			</CardHeader>
			<Divider />
			<CardBody>
				<Accordion isCompact>
					{data.map(({ code, title, description }) => (
						<AccordionItem
							key={crypto.randomUUID()}
							aria-label={title}
							title={
								<div className="flex gap-x-2">
									<Chip color={color} variant="flat">
										{code}
									</Chip>
									<div className="font-medium dark:text-slate-300">{title}</div>
								</div>
							}
						>
							<div
								className="text-sm leading-6 pt-3 pb-7 dark:text-slate-300"
								dangerouslySetInnerHTML={description}
							/>
						</AccordionItem>
					))}
				</Accordion>
			</CardBody>
		</Card>
	)
}
