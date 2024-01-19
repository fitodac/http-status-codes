export const status500 = [
	{
		code: '500',
		title: 'Internal Server Error',
		description: {__html: `El servidor ha encontrado una situación que no sabe cómo manejarla.`},
	},
	{
		code: '501',
		title: 'Not Implemented',
		description: {__html: `El método solicitado no está soportado por el servidor y no puede ser manejado. Los únicos métodos que los servidores requieren soporte (y por lo tanto no deben retornar este código) son <code>GET</code> y <code>HEAD</code>.`},
	},
	{
		code: '502',
		title: 'Bad Gateway',
		description: {__html: `Esta respuesta de error significa que el servidor, mientras trabaja como una puerta de enlace para obtener una respuesta necesaria para manejar la petición, obtuvo una respuesta inválida.`},
	},
	{
		code: '503',
		title: 'Service Unavailable',
		description: {__html: `El servidor no está listo para manejar la petición. Causas comunes puede ser que el servidor está caído por mantenimiento o está sobrecargado. Hay que tomar en cuenta que junto con esta respuesta, una página usuario-amigable explicando el problema debe ser enviada. Estas respuestas deben ser usadas para condiciones temporales y el encabezado HTTP <code>Retry-After</code>: debería, si es posible, contener el tiempo estimado antes de la recuperación del servicio. El webmaster debe también cuidar los encabezados relacionados al caché que son enviados junto a esta respuesta, ya que estas respuestas de condición temporal deben usualmente no estar en el caché.`},
	},
	{
		code: '504',
		title: 'Gateway Timeout',
		description: {__html: `Esta respuesta de error es dada cuando el servidor está actuando como una puerta de enlace y no puede obtener una respuesta a tiempo.`},
	},
	{
		code: '505',
		title: 'HTTP Version Not Supported',
		description: {__html: `La versión de HTTP usada en la petición no está soportada por el servidor.`},
	},
	{
		code: '506',
		title: 'Variant Also Negotiates',
		description: {__html: `El servidor tiene un error de configuración interna: negociación de contenido transparente para la petición resulta en una referencia circular.`},
	},
	{
		code: '507',
		title: 'Insufficient Storage',
		description: {__html: `El servidor tiene un error de configuración interna: la variable de recurso escogida está configurada para acoplar la negociación de contenido transparente misma, y no es por lo tanto un punto final adecuado para el proceso de negociación.`},
	},
	{
		code: '508',
		title: 'Loop Detected',
		description: {__html: `El servidor detectó un ciclo infinito mientras procesaba la solicitud.`},
	},
	{
		code: '510',
		title: 'Not Extended',
		description: {__html: `Extensiones adicionales para la solicitud son requeridas para que el servidor las cumpla.`},
	},
	{
		code: '511',
		title: 'Network Authentication Required',
		description: {__html: `El código de estado 511 indica que el cliente necesita autenticar para obtener acceso a la red.`},
	},
]
