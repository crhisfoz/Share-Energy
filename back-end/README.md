# Desafio SharEnergy - BACK-END

### [O que funciona](#funciona)

### [Pretende Corrigir](#pretende)

### [Como usar](#como-usar)

### [Pré-Requisitos](#pre-requisitos)

<h1 id="topo">Conteúdo</h1>

<p>Link para Conferir a DOCUMENTAÇÃO => <a href=https://documenter.getpostman.com/view/19720614/2s8ZDR7kHP" target="_blank">SharEnergy API</a>.</p>
<p>Link do Deploy AWS => <a href="http://ec2-54-164-12-137.compute-1.amazonaws.com:3003/users" target="_blank">Desafio-Desafio SharEnergy </a>.</p>

   * [Sobre](#sobre)   
  <h2 id="sobre">:notebook: Sobre </h2> 
  💬 <p>Back-END-End desenvolvido para desafio técnico cargo de desenvolvedor Jr, Projeto desenvolvido com Programação Orientada a Objetos baseado em Arquitetura de 3 camadas, também foram feitas algumas injeções de dependências com alguns conceitos de Arquitetura Limpa, tendo uma entidade principal Usuários(Users),com seus diversos atributos e métodos, foi feito o encapsulamento para que haja a segurança dos dados recebidos, verificações necessárias e criado criptografia de Password para inserção no banco de dados, também antes de criar o usuário criei a verificação para que seja feita uma busca no banco de dados para saber se o username, email ou cpf enviados já existem no banco ou não.</p>
  <p><strong>Desafios:</strong></p><p>O principal foi aprender a usar Mongodb que foi o banco de dados solicitado para uso, como não havia utilizado anteriormente, precisei fazer algumas pesquisas, com o auxilio de um tutorial consegui criar o acesso e fazer funcionar completamente, como ele cria um id próprio, resolvi deixar o id criado na regra de negócios e omiti-lo na hora de inserir no banco de dados, caso seja necessária a migração de banco, o processo será mais facil, como foi meu primeiro contato, tive que fazer algumas validações dentro da camada database que acho que devem ser feitas dentro do business, logo pretendo estudar melhor o funcionamento e o modo de uso do banco para fazer esses retornos de uma forma mais performática .</p>
  <p> O segundo desafio foi aprender a fazer deploy no AWS, quando terminei o back-end revendo uma aula que tive e seguindo um passo a passo consegui fazer o deploy e deixar a api funcionando, mas conforme fui fazendo o front tive que refatorar alguns endpoints, achei melhor deixar para fazer o deploy final apenas no último dia, grande erro, sem motivo algum aparente, a máquina do AWS não estava mais funcionando, e não instalava o node, tentei por horas sem êxito, após o final do prazo, tentei novamente e como por mágica funcionou, vai entender, porém mesmo eu habilitando os protocolos de entrada corretamente, ele não está retornando as requisições de protocolo <strong>http</strong> apenas de <strong>https</strong>, no momento irei deixar assim, pra depois verificar o porque isso está acontecendo. </p>
  <p> O terceiro desafio foi criar uma função que valida os campos de dados que seão permitidos atualizar, através de algumas pesquisas e dicas de um colega que estudou na Labenu comigo conseguimos criar uma função que verifica se as propriedades são nulas e deleta elas, aproveitei e fiz uma lista de propriedades de objetos dos campos que serão permitidos atualizar</p>
    O projeto se apresenta na forma de comandos que interagem com a entidade Usuários onde: <br/>
   ** Cria usuário,<br/>
   ** Faz o Login desse usuário,<br/>
   ** Busca todos os usuários do bando de dados<br/>
   ** Busca um usuário especifíco através de seu id</br>
   ** Edita esse usuário<br/>
   ** Deleta esse usuário<br/>
   ** Valida o token esse usuário<br/>
 Também criei um endpoint que faz a validação de expiração de token, caso seja válido esse endpoint retorna um objeto contendo um true, caso esteja expirado ou seja inválido retorna false, todos os itens requisitados para que os comandos de endpoints funcionem e suas formas corretas de uso, estão explicitados no Link da Documentação do Postman em anexo
  
  <h4 align="right"><a href="#topo">Topo</a></h4> 
  

  <h2 id="pre-requisitos">[Pré-Requisitos] </h2>
  
  #### Rodando localmente

* Clone o repositório

`https://github.com/crhisfoz/Share-Energy.git`

 navegue até o respositório clonado, entre na posta back-end

* Instale as dependências: 
  * cors
  * dotenv
  * bootstrap 
  * express
  * jsonwebtoken
  * knex
  * mongodb
  * mongoose
  * validator
  * @types/bcryptjs
  * @types/cors
  * @types/express
  * @types/jsonwebtoken
  * @types/knex
  * @types/node"
  * @types/uuid
  * ts-node-dev
  * @types/validator
  * typescript

`npm install`

* Inicialize a aplicação:

`npm run dev `

<h4 align="right"><a href="#topo">Topo</a></h4>

 ## <h2 id= "funciona">[O que funciona]</h2>
 
 <h4> todas as funcões solicitadas foram atendidas </h4>
 
 <h2 id="pretende"> [Pretende Corrigir]</h2>
 
- algumas validações de role

<h4 align="right"><a href="#topo">Topo</a></h4>

🤓📚

## Desenvolvido por: 

[https://github.com/crhisfoz] – crhisnokia@live.com
