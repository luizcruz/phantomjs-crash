var page=require('webpage').create();

page.open("http://exame.abril.com.br", function(status){

	if (status == "success"){
		console.log(page.title);
	} else {
		console.log("Erro")
	}
	phantom.exit(0);

});
