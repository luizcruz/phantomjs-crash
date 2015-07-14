
//Objeto da API Webpage
var page=require('webpage').create();

//Função que faz a requisição
page.open("http://exame.abril.com.br/", function(status){
	
	//Valida status da requisição
	if (status == "success"){
		//Imprime o titulo do objeto page carregado
		console.log(page.plainText);
	} else {
		console.log("Erro")
	}
	phantom.exit(0);

});
