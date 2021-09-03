### React JS + SQL + NodeJS + API Watson(IBM)
### Uma aplicação que sintetiza audios para você. Basta digitar o texto.

### Como funciona?

#### O Primeiro passo, é adquirir suas credenciais, necessarias para utilizar a API IBM Watson - Text to Speech.
#### Acesse https://www.ibm.com/cloud/watson-text-to-speech e clique em "start for free"
<br></br>
<img src="ibm start.png" alt="imagem_start_for_free" width="400"/>
<br></br>

#### Depois, será necessário criar um conta. Clique em Sign up to create.
<br></br>
<img src="ibm signup.png" alt="imagem_start_for_free" width="400"/>
<br></br>

#### Depois de seguir o passo a passo para criar sua conta, logue na plataforma e acesse o link do primeiro passo.
#### Lá, clique em crete, e então, em show. Copie a API Key e a URL. Guarde com muito carinho.
<img src="ibm create.png" alt="imagem_start_for_free" width="400"/>
<br></br>

#### A segunda coisa importante , é criar o banco de dados que iremos usar, e um usuario com privilégios, caso não o tenha.
#### Utilize os comandos abaixo em seu mysql para gerar o usuário.
#### CREATE USER 'usuario'@'localhost' IDENTIFIED BY 'senha';
#### GRANT ALL PRIVILEGES ON * . * TO 'usuario'@'localhost';
#### FLUSH PRIVILEGES;
<br></br>

#### Agora, crie o banco de dados e tabela:

#### CREATE DATABASE watson_api;
#### USE watson_api;
#### CREATE TABLE comments ( comment VARCHAR(250));

<br></br>
#### Feito isso, podemos dar inicio. Abre seu terminal e baixe essa aplicação com o comando:
#### git clone https://github.com/adrianoforcellini/api-ibm-watson.git
####  Entre na pasta do projeto com o comando :
###   cd api-ibm-watson 
####  Agora adicionaremos o arquivo de configuração com a API Key, A API URL , o Nome do usuario SQL e o password SQL
####  Navegue até a pasta smarkio-desafio-backend  com o comando :
####  cd V1/smarkio-desafio-backend/
####  Crie um arquivo .env e adicione os itens como no exemplo: 
<img src="ibm env.png" alt="imagem_start_for_free" width="400"/>

#### Agora vamos instalar as dependências e iniciar o servidor:
#### npm i && npm start
<br></br>

####  Em outro terminal, navegue até a pasta do front ( partindo da mesma pasta onde foi baixado o projeto ),
####  e instale também as dependencias e inicie o servidor :
####  cd api-ibm-watson/V1/smarkio-desafio-frontend/ && npm i && npm start

### Agora é só digitar os comentários e enviar. Bacana, não?
### Sempre que quiser reutilizar o aplicativo, basta iniciar os dois servidores e aguardar até que os comentarios sejam renderizados na tela.

