function evt(){
   var usuario = document.getElementById("cpf").value;

   document.getElementById("test").innerHTML = limparEvt(usuario)
}

function limparEvt(lcpf){
    return lcpf.replace(/[^0-9]/g,'');
  

}
// isto e um comentario 

/*
Isto e um comentario

klasbhfjkldjclkbndvjklcnlasnckldas

asfcdsfsad

*/
