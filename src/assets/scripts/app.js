let nomes = [];

function adicionarNome() {
    const nomeInput = document.getElementById('participante');
    const nome = nomeInput.value.trim();

    if (nome !== "") {
        nomes.push(nome);
        nomeInput.value = ""; // Limpa o campo após adicionar
        console.log(nomes);
        //renderizarNomes();
    }
}

//function removerNome(nome) {
//    nomes = nomes.filter(item => item !== nome);
//    renderizarNomes();
//}

//function renderizarNomes() {
//    const listaNomes = document.getElementById('listaNomes');
//    listaNomes.innerHTML = ""; // Limpa a lista

//    nomes.forEach(nome => {
//        const nomeCaixa = document.createElement('div');
//        nomeCaixa.classList.add('nomeCaixa');
        
//        nomeCaixa.innerHTML = `
//            ${nome} 
//            <button onclick="removerNome('${nome}')">X</button>
//        `;
        
//        listaNomes.appendChild(nomeCaixa);
//    });
//}
