var formulario = document.querySelector('form');
formulario.onsubmit = function(){

    if(formulario.nome.value == ""){
        alert("Campo Nome Vazio");
        formulario.nome.focus()
        return false
    }
    if(formulario.snome.value == ""){
        alert("Campo Sobrenome Vazio");
        formulario.nome.focus()
        return false
    }
    if(form.email.value=="" || form.email.value.indexOf('@')==-1 || form.email.value.indexOf('.')==-1){
        alert( "Por favor, informe um E-MAIL válido!" );
        return false;
    }
    alert("teste");
}



function validar(){
    var form = document.getElementById("form")
    var nome = form.nome.value
    var snome = form.snome.value
    var email = form.email.value
    var rg = form.rg.value
    var cpf = form.rg.value


    if(formulario.nome.value == ""){
        alert("Campo Nome Vazio");
        formulario.nome.focus()
        return false
    }
    if(formulario.snome.value == ""){
        alert("Campo Sobrenome Vazio");
        formulario.snome.focus()
        return false
    }
    if(document.forms[0].email.value=="" || document.forms[0].email.value.indexOf('@')==-1 || document.forms[0].email.value.indexOf('.')==-1){
	   alert("Por favor, informe um E-mail válido!");
	   return false;
	}
    if(formulario.rg.value == ""){
        alert("Campo RG Vazio");
        formulario.rg.focus()
        return false
    }
    if(formulario.cpf.value == ""){
        alert("Campo CPF Vazio");
        formulario.cpf.focus()
        return false
    }
}