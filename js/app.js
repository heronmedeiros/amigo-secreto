let amigos = [];

function adicionar() {
  let amigo = document.getElementById('nome-amigo');

  if (amigo.value == '') {
    alert('Informe o nome do amigo!')
    return;
  }

  if (amigos.includes(amigo.value)) {
    alert('Nome já adicionado!')
    return;
  }

  let lista = document.getElementById('lista-amigos');
  amigos.push(amigo.value);

  if (lista.textContent =='') {
    lista.textContent = amigo.value;
  } else {
    lista.textContent = `${lista.textContent}, ${amigo.value}`;
  }

  amigo.value = '';
}

const embaralha = (lista) => {

  for (let indice = lista.length; indice; indice--) {

      const indiceAleatorio = Math.floor(Math.random() * indice);

      // atribuição via destructuring
      [lista[indice - 1], lista[indiceAleatorio]] =
          [lista[indiceAleatorio], lista[indice - 1]];
  }
}

function sortear() {
  if (amigos.length < 4) {
    alert('Adicione pelo menos 4 amigos!');
    return;
  }

  embaralha(amigos);

  let sorteio = document.getElementById('lista-sorteio');

  for (let index = 0; index < amigos.length; index++) {

    if (index == (amigos.length -1)) {
      sorteio.innerHTML += `${amigos[index]}  --> ${amigos[0]} <br />`
    } else {
      sorteio.innerHTML += `${amigos[index]}  --> ${amigos[index + 1]} <br />`
    }
  }

  document.querySelectorAll('.button.secondary')[0].setAttribute("disabled", "disabled");
}

function reiniciar() {
  amigos = [];
  document.getElementById('lista-amigos').innerHTML = '';
  document.getElementById('lista-sorteio').innerHTML = '';
  document.querySelectorAll('.button.secondary')[0].removeAttribute("disabled");
}