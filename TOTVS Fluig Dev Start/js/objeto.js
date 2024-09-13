function externo(){
	
	var pessoa = {
			Nome : "Matheus",
			Sobrenome : "Dall olmo",
			Departamento : "fluig"
	};
	
	document.getElementById("local").innerHTML = pessoa.Nome + " trabalha no " + pessoa.Departamento;
}