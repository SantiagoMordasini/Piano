const buttons = document.querySelectorAll('button');

buttons.forEach(
    button => button.addEventListener('click', playSound)
) ;
 
function playSound (event)  {

    const button = event.target;
    const note = button.dataset.notamusical;

   const audio = document.getElementById(`audio${note}`);
   audio.pause();
   audio.currentTime=0;
   audio.play();
   

 }
    

 // hacer que suene con teclas
 
 document.addEventListener('keydown', evento => {
        const key = evento.key;
        const button = document.querySelector(`button[data-tecla="${key}"]`);
         if (button)  /// <--- hace que solo se ejecute cuando se presiona un boton asignado, evita que salga error en consola cuando se teclea una tecla no asignada
            button.click();
 });