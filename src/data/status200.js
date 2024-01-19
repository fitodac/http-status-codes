export const status200 = [
	{
		code: '200',
		title: 'OK',
		description: {
			__html: `La solicitud ha tenido éxito. El significado de un éxito varía dependiendo del método HTTP`,
		},
	},
	{
		code: '201',
		title: 'Created',
		description: {
			__html: `La solicitud ha tenido éxito y se ha creado un nuevo recurso como resultado de ello. Ésta es típicamente la respuesta enviada después de una petición PUT.`,
		},
	},
	{
		code: '202',
		title: 'Accepted',
		description: {
			__html: `La solicitud se ha recibido, pero aún no se ha actuado. Es una petición "sin compromiso", lo que significa que no hay manera en HTTP que permite enviar una respuesta asíncrona que indique el resultado del procesamiento de la solicitud. Está pensado para los casos en que otro proceso o servidor maneja la solicitud, o para el procesamiento por lotes.`,
		},
	},
	{
		code: '203',
		title: 'Non-Authoritative Information',
		description: {
			__html: `La petición se ha completado con éxito, pero su contenido no se ha obtenido de la fuente originalmente solicitada, sino que se recoge de una copia local o de un tercero. Excepto esta condición, se debe preferir una respuesta de 200 OK en lugar de esta respuesta.`,
		},
	},
	{
		code: '204',
		title: 'No Content',
		description: {
			__html: `La petición se ha completado con éxito pero su respuesta no tiene ningún contenido, aunque los encabezados pueden ser útiles. El agente de usuario puede actualizar sus encabezados en caché para este recurso con los nuevos valores.`,
		},
	},
	{
		code: '205',
		title: 'Reset Content',
		description: {
			__html: `La petición se ha completado con éxito, pero su respuesta no tiene contenidos y además, el agente de usuario tiene que inicializar la página desde la que se realizó la petición, este código es útil por ejemplo para páginas con formularios cuyo contenido debe borrarse después de que el usuario lo envíe.`,
		},
	},
	{
		code: '206',
		title: 'Partial Content',
		description: {
			__html: `La petición servirá parcialmente el contenido solicitado. Esta característica es utilizada por herramientas de descarga como wget para continuar la transferencia de descargas anteriormente interrumpidas, o para dividir una descarga y procesar las partes simultáneamente.`,
		},
	},
	{
		code: '207',
		title: 'Multi-Status',
		description: {
			__html: `Una respuesta Multi-Estado transmite información sobre varios recursos en situaciones en las que varios códigos de estado podrían ser apropiados. El cuerpo de la petición es un mensaje XML.

`,
		},
	},
	{
		code: '208',
		title: 'Already Reported',
		description: {
			__html: `El listado de elementos DAV ya se notificó previamente, por lo que no se van a volver a listar.`,
		},
	},
	{
		code: '226',
		title: 'IM Used',
		description: {
			__html: `El servidor ha cumplido una petición GET para el recurso y la respuesta es una representación del resultado de una o más manipulaciones de instancia aplicadas a la instancia actual.`,
		},
	},
]
