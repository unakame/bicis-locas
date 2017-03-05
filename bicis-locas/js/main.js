function validateForm(){
      var nomBre = document.getElementById('name');
      var aPellido = document.getElementById('lastname')
      var eMail = document.getElementById('input-email')
      var contraSenia = document.getElementById('input-password')
      var biCis = document.getElementById('bikes')

        if (nomBre.value.length == 0){
           return alert("Por favor ingresa tu nombre");
            }
       if(nomBre.value.charAt(0) == "a"){
           return alert("Escribe un nombre con mayúsculas");
            }
        if(aPellido.value.length == 0){
           return alert('Por favor ingresa tu apellido');
            }
        if(eMail.value.length == 0){
           return alert('Por favor ingresa tu e-mail');
         }else if(!(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(eMail))){
           return alert ('Ingresa un correo electrónico válido')
         }
        if(contraSenia.value.length == 0){
          return alert('Por favor ingresa una contraseña');
        }else if(contraSenia.value == "password" ||contraSenia.value == "123456" ||contraSenia.value == "0987654"){
          return alert ("Debes crear una contraseña más segura");
        }
         if(biCis.value == 0){
          return alert('Por favor elige una bici');
            }







}
