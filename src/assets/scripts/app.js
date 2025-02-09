let nomes = [];
const input = document.getElementById('participante');

function adicionarNome() {
    const nome = input.value.trim();
    
    if (!nome) {
        input.classList.add('error');
        input.placeholder = "Por favor, insira um nome";
        setTimeout(() => {
            input.classList.remove('error');
            input.placeholder = "Nome do participante";
        }, 2500);
        return;
    }
    
    if (nomes.includes(nome)) {
        exibirModal("<h3>Aviso</h3>Este nome já foi adicionado.", limparCampoInput);
        return;
    }

    nomes.push(nome);
    input.value = '';
    salvarNomes();
    atualizarListaParticipantes();
}

function exibirModal(mensagem, callback) {
    const modal = document.getElementById('modal-erro');
    const modalMensagem = document.getElementById('modal-mensagem');
    modalMensagem.innerHTML = mensagem;
    modal.style.display = 'block';

    const closeButton = modal.querySelector('.close');
    closeButton.onclick = () => {
        fecharModal();
        if (callback) callback();
    };
}

function fecharModal() {
    const modal = document.getElementById('modal-erro');
    modal.style.display = 'none';
}

function limparCampoInput() {
    input.value = '';
}

function atualizarListaParticipantes() {
    const listaDiv = document.getElementById('lista-participantes');
    listaDiv.innerHTML = ''; // Limpa a lista atual
    
    if (nomes.length === 0) {
        listaDiv.style.display = 'none'; // Torna a div invisível se não houver nomes
    } else {
        listaDiv.style.display = 'block'; // Torna a div visível se houver nomes
        const ol = document.createElement('ol');
        nomes.forEach((nome, index) => {
            const li = document.createElement('li');
            li.textContent = nome;
            const removeButton = document.createElement('button'); // Botão para remover o nome
            removeButton.innerHTML = '<span class="material-icons-outlined">person_remove</span>';
            removeButton.onclick = () => removerNome(index);
            removeButton.title = "Excluir";
            li.appendChild(removeButton);
            ol.appendChild(li);
        });
        listaDiv.appendChild(ol);
    }
}

function removerNome(index) {
    nomes.splice(index, 1);
    salvarNomes();
    atualizarListaParticipantes();
}

function sortearNome() {
    if (nomes.length === 0) {
        exibirModal("<h3>Aviso</h3>A lista de participantes está vazia.");
        return;
    }
    const indiceAleatorio = Math.floor(Math.random() * nomes.length);
    const nomeSorteado = nomes[indiceAleatorio];
    exibirModal(`<h2>E seu amigo secreto é...</h2> <h1>${nomeSorteado}!!</h1>`);
}


// Tornar os nomes da lista persistente
function salvarNomes() {
    localStorage.setItem('nomes', JSON.stringify(nomes));
}

function carregarNomes() {
    const nomesSalvos = localStorage.getItem('nomes');
    if (nomesSalvos.length > 0) {
        nomes = JSON.parse(nomesSalvos);
    }
    atualizarListaParticipantes();
}

//Chamada de funções ao carregar a página
carregarNomes();