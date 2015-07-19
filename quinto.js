//Objetos das APIs Webpage e Filesystem
var page = require('webpage').create();
var fs = require('fs');

//Arquivo de destino (formato JSON)

var filePath = 'megasena.json';

page.open('http://www1.caixa.gov.br/loterias/resultados/asp/megasena.asp', function(status) {

	//Avalia funções no contexto da página
	var json = page.evaluate(function() {
		var items=document.getElementsByClassName("numbers mega-sena").item(0).getElementsByTagName("li")
		var numbers="";
		for (var j = 0; j < items.length; ++j) {
			numbers += " "+items[j].innerText;
	        }
		
		//Retorna objeto no padrão JSON
		return {
			description: document.getElementsByTagName('h2').item(3).getElementsByTagName('span').item(0).innerText,
			result: document.getElementsByClassName("resultado-loteria").item(0).getElementsByClassName("epsilon").item(0).innerText,
			location: document.getElementsByClassName("resultado-loteria").item(0).getElementsByClassName("description").item(0).innerText,
			numbers: numbers.trim()
		       }
	});

  	//console.log(JSON.stringify(json,null,5));

	//Grava arquivo JSON
	var out = fs.open(filePath, 'w');
	out.write(JSON.stringify(json,null,5));
	out.close();
	
	if(fs.exists(filePath)){
		time = new Date();
		console.log(filePath+" criado em "+time)
	}

 	 phantom.exit();

});
