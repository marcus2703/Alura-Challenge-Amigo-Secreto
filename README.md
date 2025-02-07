# Desafio Amigo Secreto

Este projeto é uma aplicação simples para adicionar e sortear nomes de participantes de um amigo secreto.

## Instalação

1. Clone o repositório para o seu computador:
    ```bash
    git clone https://github.com/seu-usuario/desafio-amigo-secreto.git
    ```
2. Navegue até o diretório do projeto:
    ```bash
    cd desafio-amigo-secreto
    ```

## Dependências

Não há dependências adicionais, pois o projeto utiliza apenas HTML, CSS e JavaScript puro. 

## Como Executar o Projeto

1. Abra o arquivo `index.html` no seu navegador:
    - Você pode simplesmente arrastar o arquivo para uma aba do navegador ou clicar duas vezes sobre ele no seu explorador de arquivos.

2. Adicione os nomes dos participantes no campo de entrada e clique em "Adicionar".

3. Após inserir todos os participantes, clique em "Sortear" para selecionar um nome aleatoriamente.

## Estrutura do Projeto

```
desafio-amigo-secreto/
├── src/
│   ├── assets/
│   │   ├── images/
│   │   │   └── logo.png
│   │   ├── styles/
│   │   │   ├── reset.css
│   │   │   └── main-content.css
│   ├── scripts/
│   │   └── app.js
├── index.html
└── README.md
```

## Possíveis Problemas e Soluções

### Problema: O botão "Adicionar" não funciona.
- **Solução**: Verifique se o arquivo `app.js` está corretamente referenciado no seu HTML. Certifique-se também de que você está clicando no botão corretamente e que não há erros no console do navegador.

### Problema: A lista de participantes não aparece.
- **Solução**: Certifique-se de que há nomes adicionados à lista. Verifique o console do navegador para possíveis erros de JavaScript.

### Problema: A lista de participantes é apagada ao recarregar a página.
- **Solução**: Certifique-se de que a função `salvarNomes` está sendo chamada após cada atualização da lista e que a função `carregarNomes` é chamada quando a página é carregada (evento `DOMContentLoaded`).

## Contribuições

Contribuições são bem-vindas! Se você tiver sugestões ou encontrar problemas, por favor abra uma issue ou envie um pull request.

## Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

