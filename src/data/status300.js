export const status300 = [
	{
		code: '300',
		title: 'Multiple Choices',
		description: {
			__html: `Esta solicitud tiene más de una posible respuesta. User-Agent o el usuario debe escoger uno de ellos. No hay forma estandarizada de seleccionar una de las respuestas.`,
		},
	},
	{
		code: '301',
		title: 'Moved Permanently',
		description: {
			__html: `Este código de respuesta significa que la URI del recurso solicitado ha sido cambiado. Probablemente una nueva URI sea devuelta en la respuesta.`,
		},
	},
	{
		code: '302',
		title: 'Found (Previously "Moved Temporarily")',
		description: {
			__html: `Este código de respuesta significa que el recurso de la URI solicitada ha sido cambiado temporalmente. Nuevos cambios en la URI serán agregados en el futuro. Por lo tanto, la misma URI debe ser usada por el cliente en futuras solicitudes.`,
		},
	},
	{
		code: '303',
		title: 'See Other',
		description: {
			__html: `El servidor envía esta respuesta para dirigir al cliente a un nuevo recurso solicitado a otra dirección usando una petición GET.`,
		},
	},
	{
		code: '304',
		title: 'Not Modified',
		description: {
			__html: `Esta es usada para propósitos de "caché". Le indica al cliente que la respuesta no ha sido modificada. Entonces, el cliente puede continuar usando la misma versión almacenada en su caché.`,
		},
	},
	{
		code: '305',
		title: 'Use Proxy',
		description: {
			__html: `Fue definida en una versión previa de la especificación del protocolo HTTP para indicar que una respuesta solicitada debe ser accedida desde un proxy. Ha quedado obsoleta debido a preocupaciones de seguridad correspondientes a la configuración de un proxy.`,
		},
	},
	{
		code: '306',
		title: 'Switch Proxy',
		description: {
			__html: `Este código de respuesta ya no es usado más. Actualmente se encuentra reservado. Fue usado en previas versiones de la especificación HTTP1.1.`,
		},
	},
	{
		code: '307',
		title: 'Temporary Redirect',
		description: {
			__html: `El servidor envía esta respuesta para dirigir al cliente a obtener el recurso solicitado a otra URI con el mismo método que se usó la petición anterior. Tiene la misma semántica que el código de respuesta HTTP <code>302 Found</code>, con la excepción de que el agente usuario no debe cambiar el método HTTP usado: si un <code>POST</code> fue usado en la primera petición, otro <code>POST</code> debe ser usado en la segunda petición.`,
		},
	},
	{
		code: '308',
		title: 'Permanent Redirect',
		description: {
			__html: `Significa que el recurso ahora se encuentra permanentemente en otra URI, especificada por la respuesta de encabezado HTTP <code>Location:</code>. Tiene la misma semántica que el código de respuesta HTTP <code>301 Moved Permanently</code>, con la excepción de que el agente usuario no debe cambiar el método HTTP usado: si un <code>POST</code> fue usado en la primera petición, otro POST debe ser usado en la segunda petición.`,
		},
	},
]
