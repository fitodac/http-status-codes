export const status400 = [
	{
		code: '400',
		title: '	Bad Request',
		description: {
			__html: `Esta respuesta significa que el servidor no pudo interpretar la solicitud dada una sintaxis inválida.`,
		},
	},
	{
		code: '401',
		title: 'Unauthorized',
		description: {
			__html: `Es necesario autenticar para obtener la respuesta solicitada. Esta es similar a 403, pero en este caso, la autenticación es posible.`,
		},
	},
	{
		code: '402',
		title: 'Payment Required',
		description: {
			__html: `Este código de respuesta está reservado para futuros usos. El objetivo inicial de crear este código fue para ser utilizado en sistemas digitales de pagos. Sin embargo, no está siendo usado actualmente.`,
		},
	},
	{
		code: '403',
		title: 'Forbidden',
		description: {
			__html: `El cliente no posee los permisos necesarios para cierto contenido, por lo que el servidor está rechazando otorgar una respuesta apropiada.`,
		},
	},
	{
		code: '404',
		title: 'Not Found',
		description: {
			__html: `El servidor no pudo encontrar el contenido solicitado. Este código de respuesta es uno de los más famosos dada su alta ocurrencia en la web.`,
		},
	},
	{
		code: '405',
		title: 'Method Not Allowed',
		description: {
			__html: `El método solicitado es conocido por el servidor pero ha sido deshabilitado y no puede ser utilizado. Los dos métodos obligatorios, <code>GET</code> y <code>HEAD</code>, nunca deben ser deshabilitados y no deberían retornar este código de error.`,
		},
	},
	{
		code: '406',
		title: 'Not Acceptable',
		description: {
			__html: `Esta respuesta es enviada cuando el servidor, después de aplicar una <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Content_negotiation#server-driven_negotiation" target="_blank">negociación de contenido servidor-impulsado</a>, no encuentra ningún contenido seguido por la criteria dada por el usuario.`,
		},
	},
	{
		code: '407',
		title: 'Proxy Authentication Required',
		description: {
			__html: `Esto es similar al código 401, pero la autenticación debe estar hecha a partir de un proxy.`,
		},
	},
	{
		code: '408',
		title: 'Request Timeout',
		description: {
			__html: `Esta respuesta es enviada en una conexión inactiva en algunos servidores, incluso sin alguna petición previa por el cliente. Significa que el servidor quiere desconectar esta conexión sin usar. Esta respuesta es muy usada desde algunos navegadores, como Chrome, Firefox 27+, o IE9, usa mecanismos de pre-conexión HTTP para acelerar la navegación. También hay que tener en cuenta que algunos servidores simplemente desconecta la conexión sin enviar este mensaje.`,
		},
	},
	{
		code: '409',
		title: 'Conflict',
		description: {
			__html: `Esta respuesta puede ser enviada cuando una petición tiene conflicto con el estado actual del servidor.`,
		},
	},
	{
		code: '410',
		title: 'Gone',
		description: {
			__html: `Esta respuesta puede ser enviada cuando el contenido solicitado ha sido borrado del servidor.`,
		},
	},
	{
		code: '411',
		title: 'Length Required',
		description: {
			__html: `El servidor rechaza la petición porque el campo de encabezado <code>Content-Length</code> no esta definido y el servidor lo requiere.`,
		},
	},
	{
		code: '412',
		title: 'Precondition Failed',
		description: {
			__html: `El cliente ha indicado pre-condiciones en sus encabezados la cual el servidor no cumple.`,
		},
	},
	{
		code: '413',
		title: 'Payload Too Large',
		description: {
			__html: `La entidad de petición es más larga que los límites definidos por el servidor; el servidor puede cerrar la conexión o retornar un campo de encabezado <code>Retry-After</code>.`,
		},
	},
	{
		code: '414',
		title: 'URI Too Long',
		description: {
			__html: `La URI solicitada por el cliente es más larga de lo que el servidor está dispuesto a interpretar.`,
		},
	},
	{
		code: '415',
		title: 'Unsupported Media Type',
		description: {
			__html: `El formato multimedia de los datos solicitados no está soportado por el servidor, por lo cual el servidor rechaza la solicitud.`,
		},
	},
	{
		code: '416',
		title: 'Range Not Satisfiable',
		description: {
			__html: `El rango especificado por el campo de encabezado <code>Range</code> en la solicitud no cumple; es posible que el rango está fuera del tamaño de los datos objetivo del URI.`,
		},
	},
	{
		code: '417',
		title: 'Expectation Failed',
		description: { __html: `Significa que la expectativa indicada por el campo de encabezado <code>Expect</code> solicitada no puede ser cumplida por el servidor.` },
	},
	{
		code: '418',
		title: `I'm a Teapot`,
		description: { __html: `El servidor se rehúsa a intentar hacer café con una tetera.` },
	},
	{
		code: '421',
		title: 'Misdirected Request',
		description: { __html: `La petición fue dirigida a un servidor que no es capaz de producir una respuesta. Esto puede ser enviado por un servidor que no está configurado para producir respuestas por la combinación del esquema y la autoridad que están incluidos en la URI solicitada` },
	},
	{
		code: '422',
		title: 'Unprocessable Entity',
		description: { __html: `La petición estaba bien formada pero no se pudo seguir debido a errores de semántica.` },
	},
	{
		code: '423',
		title: 'Locked',
		description: { __html: `El recurso que está siendo accedido está bloqueado.` },
	},
	{
		code: '424',
		title: 'Failed Dependency',
		description: { __html: `La petición falló debido a una falla de una petición previa.` },
	},
	{
		code: '425',
		title: 'Too Early',
		description: { __html: `El servidor se rehúsa a aplicar la solicitud usando el protocolo actual pero puede estar dispuesto a hacerlo después que el cliente se actualice a un protocolo diferente. El servidor envía un encabezado Upgrade en una respuesta para indicar los protocolos requeridos.` },
	},
	{
		code: '426',
		title: 'Upgrade Required',
		description: { __html: `El servidor origen requiere que la solicitud sea condicional. Tiene la intención de prevenir problemas de 'actualización perdida', donde un cliente OBTIENE un estado del recurso, lo modifica, y lo PONE devuelta al servidor, cuando mientras un tercero ha modificado el estado del servidor, llevando a un conflicto.` },
	},
	{
		code: '428',
		title: 'Precondition Required',
		description: { __html: `El usuario ha enviado demasiadas solicitudes en un periodo de tiempo dado.` },
	},
	{
		code: '429',
		title: 'Too Many Requests',
		description: { __html: `El usuario ha enviado demasiadas solicitudes en un periodo de tiempo dado.` },
	},
	{
		code: '431',
		title: 'Request Header Fields Too Large',
		description: { __html: `El servidor no está dispuesto a procesar la solicitud porque los campos de encabezado son demasiado largos. La solicitud PUEDE volver a subirse después de reducir el tamaño de los campos de encabezado solicitados.` },
	},
	{
		code: '451',
		title: 'Unavailable For Legal Reasons',
		description: { __html: `El usuario solicita un recurso ilegal, como alguna página web censurada por algún gobierno.` },
	},
]
