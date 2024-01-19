(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{3674:function(e,a,o){Promise.resolve().then(o.bind(o,2461))},2461:function(e,a,o){"use strict";o.r(a),o.d(a,{default:function(){return E}});var i=o(3827),t=o(4090),s=o(5779),r=o(3031),n=o(5187),d=o(1055),c=o(4592),l=o(8721),u=o(8695);let p=e=>{let{title:a,data:o,color:t}=e;return(0,i.jsxs)(s.w,{classNames:{base:"dark:bg-black/30"},children:[(0,i.jsx)(r.u,{children:(0,i.jsx)("h3",{className:"text-".concat(t),children:a})}),(0,i.jsx)(n.j,{}),(0,i.jsx)(d.G,{children:(0,i.jsx)(c.d,{isCompact:!0,children:o.map(e=>{let{code:a,title:o,description:s}=e;return(0,i.jsx)(l.G,{"aria-label":o,title:(0,i.jsxs)("div",{className:"flex gap-x-2",children:[(0,i.jsx)(u.z,{color:t,variant:"flat",children:a}),(0,i.jsx)("div",{className:"font-medium dark:text-slate-300",children:o})]}),children:(0,i.jsx)("div",{className:"text-sm leading-6 pt-3 pb-7 dark:text-slate-300",dangerouslySetInnerHTML:s})},crypto.randomUUID())})})})]})};var m=o(5134);let h=()=>{let[e,a]=(0,t.useState)(!0);return(0,t.useEffect)(()=>{e&&document.body.classList.add("dark")},[]),(0,t.useEffect)(()=>{e?document.body.classList.add("dark"):document.body.classList.remove("dark")},[e]),(0,i.jsx)(m.i,{defaultSelected:!0,classNames:{wrapper:"bg-sky-100 group-data-[selected=true]:bg-primary/50 m-0",thumb:"bg-transparent text-yellow-500 shadow-none dark:bg-transparent dark:text-gray-300",thumbIcon:""},thumbIcon:e=>{let{isSelected:a,className:o}=e;return a?(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",children:(0,i.jsx)("path",{d:"M11.3807 2.01886C9.91573 3.38768 9 5.3369 9 7.49999C9 11.6421 12.3579 15 16.5 15C18.6631 15 20.6123 14.0843 21.9811 12.6193C21.6613 17.8537 17.3149 22 12 22C6.47715 22 2 17.5228 2 12C2 6.68514 6.14629 2.33869 11.3807 2.01886Z"})}):(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",children:(0,i.jsx)("path",{d:"M12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18ZM11 1H13V4H11V1ZM11 20H13V23H11V20ZM3.51472 4.92893L4.92893 3.51472L7.05025 5.63604L5.63604 7.05025L3.51472 4.92893ZM16.9497 18.364L18.364 16.9497L20.4853 19.0711L19.0711 20.4853L16.9497 18.364ZM19.0711 3.51472L20.4853 4.92893L18.364 7.05025L16.9497 5.63604L19.0711 3.51472ZM5.63604 16.9497L7.05025 18.364L4.92893 20.4853L3.51472 19.0711L5.63604 16.9497ZM23 11V13H20V11H23ZM4 11V13H1V11H4Z"})})},onValueChange:a})},v=[{code:"100",title:"Continue",description:{__html:"Esta respuesta provisional indica que todo hasta ahora est\xe1 bien y que el cliente debe continuar con la solicitud o ignorarla si ya est\xe1 terminada."}},{code:"101",title:"Switching protocols",description:{__html:'Este c\xf3digo se env\xeda en respuesta a un encabezado de solicitud <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Upgrade" target="_blank">Upgrade</a> por el cliente e indica que el servidor acepta el cambio de protocolo propuesto por el agente de usuario.'}},{code:"102",title:"Processing",description:{__html:"Este c\xf3digo indica que el servidor ha recibido la solicitud y a\xfan se encuentra procesandola, por lo que no hay respuesta disponible."}},{code:"103",title:"Early Hints",description:{__html:'Este c\xf3digo de estado est\xe1 pensado principalmente para ser usado con el encabezado <a href="https://developer.mozilla.org/es/docs/Web/HTTP/Headers/Link" target="_blank">Link</a>, permitiendo que el agente de usuario empiece a <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel/preload" target="_blank">pre-cargar</a> recursos mientras el servidor prepara una respuesta.'}}],g=[{code:"200",title:"OK",description:{__html:"La solicitud ha tenido \xe9xito. El significado de un \xe9xito var\xeda dependiendo del m\xe9todo HTTP"}},{code:"201",title:"Created",description:{__html:"La solicitud ha tenido \xe9xito y se ha creado un nuevo recurso como resultado de ello. \xc9sta es t\xedpicamente la respuesta enviada despu\xe9s de una petici\xf3n PUT."}},{code:"202",title:"Accepted",description:{__html:'La solicitud se ha recibido, pero a\xfan no se ha actuado. Es una petici\xf3n "sin compromiso", lo que significa que no hay manera en HTTP que permite enviar una respuesta as\xedncrona que indique el resultado del procesamiento de la solicitud. Est\xe1 pensado para los casos en que otro proceso o servidor maneja la solicitud, o para el procesamiento por lotes.'}},{code:"203",title:"Non-Authoritative Information",description:{__html:"La petici\xf3n se ha completado con \xe9xito, pero su contenido no se ha obtenido de la fuente originalmente solicitada, sino que se recoge de una copia local o de un tercero. Excepto esta condici\xf3n, se debe preferir una respuesta de 200 OK en lugar de esta respuesta."}},{code:"204",title:"No Content",description:{__html:"La petici\xf3n se ha completado con \xe9xito pero su respuesta no tiene ning\xfan contenido, aunque los encabezados pueden ser \xfatiles. El agente de usuario puede actualizar sus encabezados en cach\xe9 para este recurso con los nuevos valores."}},{code:"205",title:"Reset Content",description:{__html:"La petici\xf3n se ha completado con \xe9xito, pero su respuesta no tiene contenidos y adem\xe1s, el agente de usuario tiene que inicializar la p\xe1gina desde la que se realiz\xf3 la petici\xf3n, este c\xf3digo es \xfatil por ejemplo para p\xe1ginas con formularios cuyo contenido debe borrarse despu\xe9s de que el usuario lo env\xede."}},{code:"206",title:"Partial Content",description:{__html:"La petici\xf3n servir\xe1 parcialmente el contenido solicitado. Esta caracter\xedstica es utilizada por herramientas de descarga como wget para continuar la transferencia de descargas anteriormente interrumpidas, o para dividir una descarga y procesar las partes simult\xe1neamente."}},{code:"207",title:"Multi-Status",description:{__html:"Una respuesta Multi-Estado transmite informaci\xf3n sobre varios recursos en situaciones en las que varios c\xf3digos de estado podr\xedan ser apropiados. El cuerpo de la petici\xf3n es un mensaje XML.\n\n"}},{code:"208",title:"Already Reported",description:{__html:"El listado de elementos DAV ya se notific\xf3 previamente, por lo que no se van a volver a listar."}},{code:"226",title:"IM Used",description:{__html:"El servidor ha cumplido una petici\xf3n GET para el recurso y la respuesta es una representaci\xf3n del resultado de una o m\xe1s manipulaciones de instancia aplicadas a la instancia actual."}}],_=[{code:"300",title:"Multiple Choices",description:{__html:"Esta solicitud tiene m\xe1s de una posible respuesta. User-Agent o el usuario debe escoger uno de ellos. No hay forma estandarizada de seleccionar una de las respuestas."}},{code:"301",title:"Moved Permanently",description:{__html:"Este c\xf3digo de respuesta significa que la URI del recurso solicitado ha sido cambiado. Probablemente una nueva URI sea devuelta en la respuesta."}},{code:"302",title:'Found (Previously "Moved Temporarily")',description:{__html:"Este c\xf3digo de respuesta significa que el recurso de la URI solicitada ha sido cambiado temporalmente. Nuevos cambios en la URI ser\xe1n agregados en el futuro. Por lo tanto, la misma URI debe ser usada por el cliente en futuras solicitudes."}},{code:"303",title:"See Other",description:{__html:"El servidor env\xeda esta respuesta para dirigir al cliente a un nuevo recurso solicitado a otra direcci\xf3n usando una petici\xf3n GET."}},{code:"304",title:"Not Modified",description:{__html:'Esta es usada para prop\xf3sitos de "cach\xe9". Le indica al cliente que la respuesta no ha sido modificada. Entonces, el cliente puede continuar usando la misma versi\xf3n almacenada en su cach\xe9.'}},{code:"305",title:"Use Proxy",description:{__html:"Fue definida en una versi\xf3n previa de la especificaci\xf3n del protocolo HTTP para indicar que una respuesta solicitada debe ser accedida desde un proxy. Ha quedado obsoleta debido a preocupaciones de seguridad correspondientes a la configuraci\xf3n de un proxy."}},{code:"306",title:"Switch Proxy",description:{__html:"Este c\xf3digo de respuesta ya no es usado m\xe1s. Actualmente se encuentra reservado. Fue usado en previas versiones de la especificaci\xf3n HTTP1.1."}},{code:"307",title:"Temporary Redirect",description:{__html:"El servidor env\xeda esta respuesta para dirigir al cliente a obtener el recurso solicitado a otra URI con el mismo m\xe9todo que se us\xf3 la petici\xf3n anterior. Tiene la misma sem\xe1ntica que el c\xf3digo de respuesta HTTP <code>302 Found</code>, con la excepci\xf3n de que el agente usuario no debe cambiar el m\xe9todo HTTP usado: si un <code>POST</code> fue usado en la primera petici\xf3n, otro <code>POST</code> debe ser usado en la segunda petici\xf3n."}},{code:"308",title:"Permanent Redirect",description:{__html:"Significa que el recurso ahora se encuentra permanentemente en otra URI, especificada por la respuesta de encabezado HTTP <code>Location:</code>. Tiene la misma sem\xe1ntica que el c\xf3digo de respuesta HTTP <code>301 Moved Permanently</code>, con la excepci\xf3n de que el agente usuario no debe cambiar el m\xe9todo HTTP usado: si un <code>POST</code> fue usado en la primera petici\xf3n, otro POST debe ser usado en la segunda petici\xf3n."}}],b=[{code:"400",title:"	Bad Request",description:{__html:"Esta respuesta significa que el servidor no pudo interpretar la solicitud dada una sintaxis inv\xe1lida."}},{code:"401",title:"Unauthorized",description:{__html:"Es necesario autenticar para obtener la respuesta solicitada. Esta es similar a 403, pero en este caso, la autenticaci\xf3n es posible."}},{code:"402",title:"Payment Required",description:{__html:"Este c\xf3digo de respuesta est\xe1 reservado para futuros usos. El objetivo inicial de crear este c\xf3digo fue para ser utilizado en sistemas digitales de pagos. Sin embargo, no est\xe1 siendo usado actualmente."}},{code:"403",title:"Forbidden",description:{__html:"El cliente no posee los permisos necesarios para cierto contenido, por lo que el servidor est\xe1 rechazando otorgar una respuesta apropiada."}},{code:"404",title:"Not Found",description:{__html:"El servidor no pudo encontrar el contenido solicitado. Este c\xf3digo de respuesta es uno de los m\xe1s famosos dada su alta ocurrencia en la web."}},{code:"405",title:"Method Not Allowed",description:{__html:"El m\xe9todo solicitado es conocido por el servidor pero ha sido deshabilitado y no puede ser utilizado. Los dos m\xe9todos obligatorios, <code>GET</code> y <code>HEAD</code>, nunca deben ser deshabilitados y no deber\xedan retornar este c\xf3digo de error."}},{code:"406",title:"Not Acceptable",description:{__html:'Esta respuesta es enviada cuando el servidor, despu\xe9s de aplicar una <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Content_negotiation#server-driven_negotiation" target="_blank">negociaci\xf3n de contenido servidor-impulsado</a>, no encuentra ning\xfan contenido seguido por la criteria dada por el usuario.'}},{code:"407",title:"Proxy Authentication Required",description:{__html:"Esto es similar al c\xf3digo 401, pero la autenticaci\xf3n debe estar hecha a partir de un proxy."}},{code:"408",title:"Request Timeout",description:{__html:"Esta respuesta es enviada en una conexi\xf3n inactiva en algunos servidores, incluso sin alguna petici\xf3n previa por el cliente. Significa que el servidor quiere desconectar esta conexi\xf3n sin usar. Esta respuesta es muy usada desde algunos navegadores, como Chrome, Firefox 27+, o IE9, usa mecanismos de pre-conexi\xf3n HTTP para acelerar la navegaci\xf3n. Tambi\xe9n hay que tener en cuenta que algunos servidores simplemente desconecta la conexi\xf3n sin enviar este mensaje."}},{code:"409",title:"Conflict",description:{__html:"Esta respuesta puede ser enviada cuando una petici\xf3n tiene conflicto con el estado actual del servidor."}},{code:"410",title:"Gone",description:{__html:"Esta respuesta puede ser enviada cuando el contenido solicitado ha sido borrado del servidor."}},{code:"411",title:"Length Required",description:{__html:"El servidor rechaza la petici\xf3n porque el campo de encabezado <code>Content-Length</code> no esta definido y el servidor lo requiere."}},{code:"412",title:"Precondition Failed",description:{__html:"El cliente ha indicado pre-condiciones en sus encabezados la cual el servidor no cumple."}},{code:"413",title:"Payload Too Large",description:{__html:"La entidad de petici\xf3n es m\xe1s larga que los l\xedmites definidos por el servidor; el servidor puede cerrar la conexi\xf3n o retornar un campo de encabezado <code>Retry-After</code>."}},{code:"414",title:"URI Too Long",description:{__html:"La URI solicitada por el cliente es m\xe1s larga de lo que el servidor est\xe1 dispuesto a interpretar."}},{code:"415",title:"Unsupported Media Type",description:{__html:"El formato multimedia de los datos solicitados no est\xe1 soportado por el servidor, por lo cual el servidor rechaza la solicitud."}},{code:"416",title:"Range Not Satisfiable",description:{__html:"El rango especificado por el campo de encabezado <code>Range</code> en la solicitud no cumple; es posible que el rango est\xe1 fuera del tama\xf1o de los datos objetivo del URI."}},{code:"417",title:"Expectation Failed",description:{__html:"Significa que la expectativa indicada por el campo de encabezado <code>Expect</code> solicitada no puede ser cumplida por el servidor."}},{code:"418",title:"I'm a Teapot",description:{__html:"El servidor se reh\xfasa a intentar hacer caf\xe9 con una tetera."}},{code:"421",title:"Misdirected Request",description:{__html:"La petici\xf3n fue dirigida a un servidor que no es capaz de producir una respuesta. Esto puede ser enviado por un servidor que no est\xe1 configurado para producir respuestas por la combinaci\xf3n del esquema y la autoridad que est\xe1n incluidos en la URI solicitada"}},{code:"422",title:"Unprocessable Entity",description:{__html:"La petici\xf3n estaba bien formada pero no se pudo seguir debido a errores de sem\xe1ntica."}},{code:"423",title:"Locked",description:{__html:"El recurso que est\xe1 siendo accedido est\xe1 bloqueado."}},{code:"424",title:"Failed Dependency",description:{__html:"La petici\xf3n fall\xf3 debido a una falla de una petici\xf3n previa."}},{code:"425",title:"Too Early",description:{__html:"El servidor se reh\xfasa a aplicar la solicitud usando el protocolo actual pero puede estar dispuesto a hacerlo despu\xe9s que el cliente se actualice a un protocolo diferente. El servidor env\xeda un encabezado Upgrade en una respuesta para indicar los protocolos requeridos."}},{code:"426",title:"Upgrade Required",description:{__html:"El servidor origen requiere que la solicitud sea condicional. Tiene la intenci\xf3n de prevenir problemas de 'actualizaci\xf3n perdida', donde un cliente OBTIENE un estado del recurso, lo modifica, y lo PONE devuelta al servidor, cuando mientras un tercero ha modificado el estado del servidor, llevando a un conflicto."}},{code:"428",title:"Precondition Required",description:{__html:"El usuario ha enviado demasiadas solicitudes en un periodo de tiempo dado."}},{code:"429",title:"Too Many Requests",description:{__html:"El usuario ha enviado demasiadas solicitudes en un periodo de tiempo dado."}},{code:"431",title:"Request Header Fields Too Large",description:{__html:"El servidor no est\xe1 dispuesto a procesar la solicitud porque los campos de encabezado son demasiado largos. La solicitud PUEDE volver a subirse despu\xe9s de reducir el tama\xf1o de los campos de encabezado solicitados."}},{code:"451",title:"Unavailable For Legal Reasons",description:{__html:"El usuario solicita un recurso ilegal, como alguna p\xe1gina web censurada por alg\xfan gobierno."}}],f=[{code:"500",title:"Internal Server Error",description:{__html:"El servidor ha encontrado una situaci\xf3n que no sabe c\xf3mo manejarla."}},{code:"501",title:"Not Implemented",description:{__html:"El m\xe9todo solicitado no est\xe1 soportado por el servidor y no puede ser manejado. Los \xfanicos m\xe9todos que los servidores requieren soporte (y por lo tanto no deben retornar este c\xf3digo) son <code>GET</code> y <code>HEAD</code>."}},{code:"502",title:"Bad Gateway",description:{__html:"Esta respuesta de error significa que el servidor, mientras trabaja como una puerta de enlace para obtener una respuesta necesaria para manejar la petici\xf3n, obtuvo una respuesta inv\xe1lida."}},{code:"503",title:"Service Unavailable",description:{__html:"El servidor no est\xe1 listo para manejar la petici\xf3n. Causas comunes puede ser que el servidor est\xe1 ca\xeddo por mantenimiento o est\xe1 sobrecargado. Hay que tomar en cuenta que junto con esta respuesta, una p\xe1gina usuario-amigable explicando el problema debe ser enviada. Estas respuestas deben ser usadas para condiciones temporales y el encabezado HTTP <code>Retry-After</code>: deber\xeda, si es posible, contener el tiempo estimado antes de la recuperaci\xf3n del servicio. El webmaster debe tambi\xe9n cuidar los encabezados relacionados al cach\xe9 que son enviados junto a esta respuesta, ya que estas respuestas de condici\xf3n temporal deben usualmente no estar en el cach\xe9."}},{code:"504",title:"Gateway Timeout",description:{__html:"Esta respuesta de error es dada cuando el servidor est\xe1 actuando como una puerta de enlace y no puede obtener una respuesta a tiempo."}},{code:"505",title:"HTTP Version Not Supported",description:{__html:"La versi\xf3n de HTTP usada en la petici\xf3n no est\xe1 soportada por el servidor."}},{code:"506",title:"Variant Also Negotiates",description:{__html:"El servidor tiene un error de configuraci\xf3n interna: negociaci\xf3n de contenido transparente para la petici\xf3n resulta en una referencia circular."}},{code:"507",title:"Insufficient Storage",description:{__html:"El servidor tiene un error de configuraci\xf3n interna: la variable de recurso escogida est\xe1 configurada para acoplar la negociaci\xf3n de contenido transparente misma, y no es por lo tanto un punto final adecuado para el proceso de negociaci\xf3n."}},{code:"508",title:"Loop Detected",description:{__html:"El servidor detect\xf3 un ciclo infinito mientras procesaba la solicitud."}},{code:"510",title:"Not Extended",description:{__html:"Extensiones adicionales para la solicitud son requeridas para que el servidor las cumpla."}},{code:"511",title:"Network Authentication Required",description:{__html:"El c\xf3digo de estado 511 indica que el cliente necesita autenticar para obtener acceso a la red."}}];var x=o(2117);function E(){let[e,a]=(0,t.useState)(!1);return((0,t.useEffect)(()=>{setTimeout(()=>a(!0),300)},[]),e)?(0,i.jsxs)("main",{className:"pt-10 pb-32 transition-opacity opacity-0 dark:bg-slate-900 dark:text-slate-300 ".concat(e?"opacity-100":""),children:[(0,i.jsxs)("div",{className:"container mx-auto",children:[(0,i.jsxs)("div",{className:"flex justify-between",children:[(0,i.jsx)("h1",{className:"text-primary text-xl",children:"HTTP Status codes"}),(0,i.jsx)(h,{})]}),(0,i.jsxs)("div",{className:"grid grid-cols-3 gap-7 mt-7",children:[(0,i.jsxs)("div",{className:"space-y-7",children:[(0,i.jsx)(p,{title:"1xx Informational",data:v,color:"primary"}),(0,i.jsx)(p,{title:"2xx Succesful",data:g,color:"success"}),(0,i.jsx)(p,{title:"3xx Redirection",data:_,color:"secondary"})]}),(0,i.jsx)("div",{className:"space-y-7",children:(0,i.jsx)(p,{title:"4xx Client Error",data:b,color:"warning"})}),(0,i.jsx)("div",{className:"space-y-7",children:(0,i.jsx)(p,{title:"5xx Server Error",data:f,color:"danger"})})]})]}),(0,i.jsxs)("div",{className:"text-sm text-center text-slate-400 mt-20",children:["por"," ",(0,i.jsx)(x.O,{href:"https://fitodac.com",target:"_blank",size:"sm",color:"default",children:"@fitodac"})]})]}):(0,i.jsx)(i.Fragment,{})}}},function(e){e.O(0,[212,559,971,69,744],function(){return e(e.s=3674)}),_N_E=e.O()}]);