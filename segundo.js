//Objeto da API Webpage
var webpage = require('webpage');
var page = webpage.create();

//Objeto da API System
var system = require('system');
url = system.args[1];

//Definição de resolução que a página será acessada
page.viewportSize = {width: 1366, heigth: 768};

//Recorte de um pedaço da tela
page.clipRect = { top: 0, left: 0, width: 400, height: 400 };

if (url !== undefined ){

	page.open(url, function(status){

		//Salva a imagem da página carregada 
		page.render("captura.jpg");
		phantom.exit();

	});
} else {
	console.log("Uso: phantomjs segundo.js <URL>");
	phantom.exit();
}

