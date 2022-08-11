/*
Geral
O header deve ter cor de fundo #2E948A.
*/

let header = document.getElementsByTagName('header');
header[0].style.backgroundColor = '#2E948A';
/*No menu do header, está faltando o link do item Cursos que deve redirecionar para */ 

let linkCurso = document.querySelector('#menu_opcoes nav a:nth-child(1)');
linkCurso.setAttribute('href', 'cursos.html'); //id menu escrever
/*No banner da home, está faltando centralizar os elementos filhos
 da section que tem o id #introducao. */

let caminho = window.location.pathname;
if(caminho=='./index.html') {
// Passo 1 - centralizar os elementos

let introducao = document.getElementById('introducao');

introducao.style.justifyContent = 'center';

}

//Na etapa de depoimentos, o título deveria ser "O que falam sobre nós".

let depoimentos = document.querySelector('.titulo_depoimento h3');
depoimentos.innerHTML = 'O que falam sobre nós';

//Na etapa de blog, o título deveria ser "Mais conteúdo pra você".
//Já etsá pronto

//Todos os textos que estiverem com a classe .titulo devem apresentar todas as letras maiúsculas.

let titulo = document.querySelectorAll('.titulo');

titulo.forEach((titulo) =>{
    titulo.style.textTranform ='uppercase';
    //object.style.textTransform="uppercase"
})
// o botão "ver todos os posts" deve ter um link que
// direciona para o arquivo blog.html
let botao = document.getElementById('todos_posts');
botao.setAttribute('href', 'blog.html');

// 6 - Adicionar um curso novo
let divnova = document.createElement ('div');
divnova.innerHTML= `
<img src="./imagens/independencia_financeira.png" width="180px" alt="Independência Financeira">
<h2>Independência Financeira</h2>
<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
 eu fugiat nulla pariatur. </p>
<a class="comecar_agora" href="./curso.html">começar agora</a>
`

let cursonovo = document.getElementById('investimentos_poupando_independencia');
cursonovo.appendChild(divnova);
divnova.setAttribute('id', 'independencia');

// Contato implementar 
