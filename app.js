let amigos = [];
function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const listaAmigos = document.getElementById('listaAmigos');
    const nombre = inputAmigo.value.trim();

    if (nombre === '') {
        alert('Por favor, ingresa un nombre válido');
        inputAmigo.focus();
        return;
    }

    if (amigos.includes(nombre)) {
        alert('Este nombre ya está en la lista');
        inputAmigo.value = '';
        inputAmigo.focus();
        return;
    }

    amigos.push(nombre);

    const listItem = document.createElement('li');
    listItem.textContent = nombre;
    listItem.className = 'friend-item';

    listaAmigos.appendChild(listItem);

    inputAmigo.value = '';
    inputAmigo.focus();

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
}