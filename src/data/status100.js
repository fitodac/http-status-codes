export const status100 = [
	{
		code: '100',
		title: 'Continue',
		description: {
			__html:
				'Esta respuesta provisional indica que todo hasta ahora está bien y que el cliente debe continuar con la solicitud o ignorarla si ya está terminada.',
		},
	},
	{
		code: '101',
		title: 'Switching protocols',
		description: {
			__html:
				'Este código se envía en respuesta a un encabezado de solicitud <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Upgrade" target="_blank">Upgrade</a> por el cliente e indica que el servidor acepta el cambio de protocolo propuesto por el agente de usuario.',
		},
	},
	{
		code: '102',
		title: 'Processing',
		description: {
			__html:
				'Este código indica que el servidor ha recibido la solicitud y aún se encuentra procesandola, por lo que no hay respuesta disponible.',
		},
	},
	{
		code: '103',
		title: 'Early Hints',
		description: {
			__html:
				'Este código de estado está pensado principalmente para ser usado con el encabezado <a href="https://developer.mozilla.org/es/docs/Web/HTTP/Headers/Link" target="_blank">Link</a>, permitiendo que el agente de usuario empiece a <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel/preload" target="_blank">pre-cargar</a> recursos mientras el servidor prepara una respuesta.',
		},
	},
]
