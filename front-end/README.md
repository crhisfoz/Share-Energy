# Desafio SharEnergy - FRONT-END

### [O que funciona](#funciona)

### [Pretende Corrigir](#pretende)

### [Como usar](#como-usar)

### [Pré-Requisitos](#pre-requisitos)

<h1 id="topo">Conteúdo</h1>

   * [Sobre](#sobre)   
  <h2 id="sobre">:notebook: Sobre </h2> 
  💬 <p>Front-End desenvolvido para desafio técnico cargo de desenvolvedor Jr, que consiste numa página que realiza requisições de diversas Apis, renderizando seus resultados conforme são feitas essas requisições. Após um load de tela, o usuário é direcionado a tela de login, onde após digitar username e senha, o usuário pode escolher selecionar o "lembrar-me", se selecionado a função executada retornará um token e o guardará no localStorage do navegador, se não selecionado, o token é armazenado no session storage, também existe a exibição de popups de de erros caso o username ou senha utilizados estejam incorretos, após efetuar o Login o usuário é redirecionado para a página de Home, onde é visualizada uma lista de usuários em forma de cards, podendo-se pesquisar um usuário pelo nome no campo de pesquisa, na página cats, aparece um campo de pesquisa, após digitar um código se for um código válido, retorna na tela a imagem de um gato, se esse código não for encontrado na chamada de api, é retornada uma imagem de "not found", o mesmo acontece na página dogs, com a diferença que já no carregamneto é visualizada a imagem de um cão, clicando no botão, ele atualiza essa imagem, na página de usuários, é visualizada uma tabela de usuários que constam no banco de dados, podendo editar alguns dados permitidos,  ou deletar usuários, clicando no botão de adicionar novo, é direcionado a página de registro, onde pode-se cadastrar novos usuários. <br/> <strong> Desafios Encontrados: </strong> <br/> Fazer funcionar o modal de editar usuários, pois ele recebe um usuário por props, e a função que executava a opção de abrir o Modal era uma arrow function, e não executava direito, após algumas pesquisas sobre eventos, solucionei usando uma função anônima e o resultado foi o esperado</p> <p>Também passei dias com um bug por ter criado o input que recebe o código na página cats dentro de um form , fiquei 2 dias procurando o porque não funcionava, até que percebi que havia colocado a chamada da função dentro do onClick e não do onSubmit</p><p> Creio que o design e o resultado obtido ficou agradável, podendo ser melhorado com o tempo.</p>
  <h4 align="right"><a href="#topo">Topo</a></h4> 
  

  <h2 id="pre-requisitos">[Pré-Requisitos] </h2>
  
  #### Rodando localmente

* Clone o repositório

`https://github.com/crhisfoz/Share-Energy.git`


 navegue até o respositório clonado, entre na posta back-end

* Instale as dependências: 
  * react
  * xios
  * bootstrap 
  * react-dom
  * react-router-dom
  * styled-components
  * react-bootstrap
  * sweetalert2


`npm install`

* Inicialize a aplicação:

`npm start`

* Credenciais

Usuário: `desafiosharenergy`

Senha: `sh@r3n3rgy`

<h4 align="right"><a href="#topo">Topo</a></h4>

 ## <h2 id= "funciona">[O que funciona]</h2>
 
 <h4> todas as funcões solicitadas foram atendidas </h4>
 
 <h2 id="pretende"> [Pretende Corrigir]</h2>
 
- Responsibilidade de alguns componentes e páginas para mobile;

- Bug na página dogs, onde no carregamento da página mostrar uma imagem de cão e logo após ele troca essa imagem

- Também implantar na página de usuários um modal de confirmação com botões de confirmar ou cancelar se o usuário realmente deseja deletar 

<h4 align="right"><a href="#topo">Topo</a></h4>

🤓📚

## Desenvolvido por: 

[https://github.com/crhisfoz] – crhisnokia@live.com
