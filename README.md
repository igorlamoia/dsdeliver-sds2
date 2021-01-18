# DS Delivery

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://github.com/igorlamoia/dsdeliver-sds2/blob/main/LICENSE)

## Sobre o projeto 💻


https://igorlamoia-sds2.netlify.app


Um aplicativo de delivery construído durante a 2ª edição da **Semana devSuperior** (#sds2), evento organizado pela [DevSuperior](https://devsuperior.com.br "Site da DevSuperior"). Na aplicação web, criada para que os clientes, os pedidos são feitos. Já no mobile app, os entregadores têm acesso aos pedidos, ordenados pelos mais antigos, podendo iniciar a navegação via google maps, confirmar ou cancelar a entrega.


<p align="center">
 <a href="#imagens"> Imagens </a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;	
 <a href="#instalação">Instalação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 
 <a href="#-tecnologias">Tecnologias</a>
</p>


## 🚀 Tecnologias
### Back end
- Java
- Spring Boot
- PostgresSQL 
- H2 Database

### Front end
- HTML / CSS / JS / TypeScript
- ReactJS
#### Mobile App
- React Native
- TypeScript


### Implantação em produção
- Back end: Heroku
- Front end web: Netlify
- Banco de dados: Postgresql

# Modelo conceitual
![Image Conceitual](https://raw.githubusercontent.com/devsuperior/sds2/master/assets/modelo-conceitual.png)


## Imagens
![Image Web initial layout](https://github.com/igorlamoia/dsdeliver-sds2/blob/main/assets/web-layout.JPG)
![Image](https://github.com/igorlamoia/dsdeliver-sds2/blob/main/assets/02.png?raw=true)
![Image Web map](https://github.com/igorlamoia/dsdeliver-sds2/blob/main/assets/03%20(2).png?raw=true)

## Instalação
#### Pré-Requisitos
Para executar este projeto é necessário instalar o [Git](https://git-scm.com/), [java 11](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html), [Spring Tools 4](https://spring.io/tools),
[Node.js](https://nodejs.org/en/), [expo](https://docs.expo.io/get-started/installation/)
#### Rodar localmente
Para rodar localmente primeiro abra o terminal do git e clone o projeto com:
` git clone https://github.com/igorlamoia/dsdeliver-sds2 ` .
#### Backend:
Abra a pasta backend do projeto no seu Spring Tools e rode ele pelo springboot dashboard.
O servidor será executado em http://localhost:8080
#### Frontend:
Acesse a pasta front-web. <br/>
Instale as dependencias necessárias com o comando `npm install` .<br/>
Execute o comando `npm run start`.
#### Mobile App
Acesse a pasta front-mobile. <br/>
Instale as dependencias necessárias com o comando `npm install` ou `yarn install`(se você tiver o yarn instalado). <br/>
execute o comando `expo start` após o fim da instalação. <br/>

