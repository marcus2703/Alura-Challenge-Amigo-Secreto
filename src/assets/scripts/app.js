let nomes = [];

function adicionarNome() {
    const nomeInput = document.getElementById('participante');
    const nome = nomeInput.value.trim();

    if (nome !== "") {
        nomes.push(nome);
        nomeInput.value = ""; // Limpa o campo após adicionar
        console.log(nomes);
        atualizarListaParticipantes();
    }
}

function atualizarListaParticipantes() {
    const listaDiv = document.getElementById('lista-participantes');
    listaDiv.innerHTML = ''; // Limpa a lista atual
    
    if (nomes.length === 0) {
        listaDiv.style.display = 'none'; // Torna a div invisível se não houver nomes
    } else {
        listaDiv.style.display = 'block'; // Torna a div visível se houver nomes
        nomes.forEach(nome => {
            const p = document.createElement('p');
            p.textContent = nome;
            listaDiv.appendChild(p);
        });
    }
}

function sortearNome() {
    if (nomes.length === 0) {
        alert("A lista de participantes está vazia.");
        return;
    }
    
    const indiceAleatorio = Math.floor(Math.random() * nomes.length);
    const nomeSorteado = nomes[indiceAleatorio];
    alert("O nome sorteado é: " + nomeSorteado);
}