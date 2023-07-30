let alternador = false;

const circle = document.getElementById('alternador')
circle.addEventListener('click', function() {

  if(alternador) {
    direita();
    alternador = false;
  }else{
    esquerda();
    alternador = true;
  }

});

function esquerda(){

  const bodyEsquerda = document.getElementById('corpo');
  bodyEsquerda.classList.remove('corpoDireita')
  bodyEsquerda.classList.add('corpoEsquerda')

  const alternadorDireita = document.getElementById('alternador')
  alternadorDireita.classList.remove('alternadorDireita')
  alternadorDireita.classList.add('alternadorEsquerda')

}

function direita(){
  
  const bodyDireita = document.getElementById('corpo');
  bodyDireita.classList.remove('corpoEsquerda')
  bodyDireita.classList.add('corpoDireita')

  const alternadorEsquerda = document.getElementById('alternador')
  alternadorEsquerda.classList.remove('alternadorEsquerda')
  alternadorEsquerda.classList.add('alternadorDireita')
}
