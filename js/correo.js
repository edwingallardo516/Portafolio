window.addEventListener('submit',function(){
    swal("!Mensaje enviado!", "Gracias por comunicarte conmigo", "success");
    setTimeout(() => {  location.reload(); }, 4000);
})