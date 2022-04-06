function subirTela() {
    window.scrollTo ({
       top: 0,
  	   left: 0,
	   behavisor: 'smooth',
	});
}

function tirarButtonScroll() {
    if (window.scrollY === 0) {
        document.querySelector ('.scrollbutton').style.display = 'none';
    } else {
        document.querySelector ('.scrollbutton').style.display = 'flex';
    }
   
}
setInterval (tirarButtonScroll, 1000) 



const modal = document.getElementsByClassName('.modalContainer')

function abrirModal() {
  modal.classList.add('.ativar')
}

function fecharModal() {
  modal.classList.remove('.ativar')
}

function mudarEstado() {
  var modal2 = document.getElementsByClassName('modalContainer').style.display;

  if(modal2 == "none") {
    modal2.style.display = 'block';
  } 
  else
    modal2.style.display = 'none';
}
