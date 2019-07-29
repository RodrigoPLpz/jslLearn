var	respuestaHTML = document.querySelector('#respuesta');
var	tpl	=	'';
fetch("http://jsonplaceholder.typicode.com/photos").then((response)=>{
    return	response.json();
}).then((albums)=>{
    albums.forEach((elem)=>{
        tpl	+=	'<a	href="'	+	elem.url	+	'">' + '<img src="' + elem.thumbnailUrl + '">',	+ '</a>', + '<br>', + '<span>' + elem.title + '</span>';
    });
    respuestaHTML.innerHTML	= tpl;
});

/*
var	respuestaHTML = document.querySelector('#respuesta');
var	tpl	= document.createDocumentFragment();
var	elemento;
fetch("http://jsonplaceholder.typicode.com/photos").then((response)	=>{
    return	response.json();
}).then((albums)=>{
    albums.forEach(function(elem){
        elemento = document.createTextNode(`<a href="${elem.url}">
                                                <img src="${elem.thumbnailUrl}" />
                                            </a>
                                            <br/>
                                            <span>${elem.title}</span>`);
        tpl.appendChild(elemento);
    });
    respuestaHTML.appendChild(tpl);
});
*/
/*
/*si necesitamos	una	configuración más	personalizada,	se	le	puede	pasar	un	objeto	con	el	método,	
un	header	y	un	body para	usar	con	el	método	POST.  También	se	le	puede	pasar	un	modo,	unas
credenciales de	autenticación	y	parámetros	de	caché. */
/*
var	myHeaders = new	Header();
myHeaders.append('Content-Type', 'application/json');
fetch(URI,{
    method:	'GET',
    headers: myHeaders,
    mode: 'cors',
    cache:	'default'
})
*/