const nomePokemon = document.querySelector('.nome_pokemon') // Nome do pokémon
const numeroPokemon = document.querySelector('.numero_pokemon') // Número do pokémon
const imagemPokemon = document.querySelector('.imagem_pokemon') // Imagem do Pokémon

const formulario = document.querySelector('.formulario') // Formulário de busca
const campoBusca = document.querySelector('.campo_busca') // campo de busca
const botaoAnterior = document.querySelector('.botao_anterior') // Botão de navegação anterior
const botaoProximo = document.querySelector('.botao_proximo') // Botão de navegação próximo


let pokemonAtual = 1; // Número do Pokémon inicial

// função parra buscar os dados do Pokémon na API

async function buscarPokemon(pokemon) {
    // Para pegar os dados, precisamos encontrar o 'Arquivo' onde os pokémons estão
    const respostaAPI = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    // se a resposta for bem sucedida (ou seja, status 200)
    if (respostaAPI.status === 200) {
        // Aqui, se o pokémon foi encontrado, os dados dele são armazenados em um arquivos chamados json

        /*
            Const dadosPokemon = {
            "nome": "pikachu",
            "numero": 25,
            "habilidade": "Choque do trovão",
            "tipos": ["Elétrico"]
            }   
        */
       const dados = await respostaAPI.json()
       return dados;
    }
}

// função para renderizar os dados do pokémon na tela
async function exibirPokemon(pokemon) {
    // Mostra "Carregando..." enquando os dados são buscados
   nomePokemon.innerHTML = 'Carregando...' ;
   numeroPokemon.innerHTML = '';

   //busca os dados do pokémon
   const dados = await buscarPokemon(pokemon);

   // Verifica se os dados foram encontrados
   if(dados) {
    imagemPokemon.style.display = 'block';
    nomePokemon.innerHTML = dados.name; // Exibe o nome do pokémon
    numeroPokemon.innerHTML = dados.id; // Exibe o número do pokémon
    imagemPokemon.src = dados.sprites.versions['generation-v']['black-white'].animated.front_default;

    campoBusca.value = ''; // Limpa o campo de busca
    pokemonAtual = dados.id; // Atualiza o pokémon atual
   } else {
    imagemPokemon.style.display = 'none';
    nomePokemon.innerHTML = 'Não encontrado :C'
    numeroPokemon.innerHTML = '';
   }
}

// Evento de submissão do formulário para buscar o pokémon
formulario.addEventListener('submit', function (evento) {
    evento.preventDefault(); // evita recarregar a página
    exibirPokemon(campoBusca.value.toLowerCase());
});
// Evento para mostrar o pokémon anterior
botaoAnterior.addEventListener('click', function() {
    if (pokemonAtual > 1) {
        pokemonAtual -= 1;
        exibirPokemon(pokemonAtual);
    }
})

// Evento para mostrar o pokémon poximo
botaoProximo.addEventListener('click', function() {
        pokemonAtual += 1;
        exibirPokemon(pokemonAtual);
})
// Exibe o Pokémon inicial ao carregar a página
exibirPokemon(pokemonAtual);