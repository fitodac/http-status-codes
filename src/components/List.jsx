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
		<Card>
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
									<div className="font-medium">{title}</div>
								</div>
							}
						>
							{description}
						</AccordionItem>
					))}
				</Accordion>
			</CardBody>
		</Card>
	)
}
