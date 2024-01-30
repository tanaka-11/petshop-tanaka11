# Projeto Petshop com Next.js

# Recursos Utilizados

- Next.js
- API Local e API via Firebase Realtime Database
- Componentes
- Rotas
- Map, Filter
- Manipulação de formulário
- Publicação na Vercel e Netlify

---

### Link do DataBase(NoSQL) via Firebase

https://petshop-tanaka11-default-rtdb.firebaseio.com/

Firebase é uma plataforma de serviços web com uma série de funcionalidades de Back-End úteis para aplicações (web, app e jogos). No caso do projeto utilizamos o firebase para adicionar um database chamado "Firebase Realtime Database" para utilização como API JSON. Ele funciona como um **Database não relacional(NoSQL)**, ou seja, baseado em documentos(objetos) no formato JSON.

**_Obs. para teste utilizamos a extensão Thunder Client_**

---

### Sites úteis para o projeto

Conversões para Firebase - https://tableconvert.com/json-to-firebase

Teste de SEO - https://pagespeed.web.dev/

---

### Lembrete sobre o styled-component

- Instalar `npm install styled-components`
- Configurar o next.config para renderização do styled-component adicionando as seguinte linhas

```javascript
  // Adicione estas linhas
  compiler: {
    styledComponents: true,
  },
```

---

### Lembrete sobre o JSON server

- Instala-lo de maneira global `npm install -g json-server`
- Colocação do arquivo `db.json` na raiz do projeto (ele servira como um banco de dados para a API)
- Rodar o servidor com o comando `json-server --watch db.json` dentro da pasta do projeto com o comando `cd/nomedapasta/projeto` utilizando o node.js command prompt
- Para evitar conflitos nas portas utilizar o script personalizado no `package.json` com a seguinte configuração `"api": json-server --host 10.20.46.32 db.json --port 2112` e depois rodar o servidor `npm run api`. **Obs: em casa trocar para o ip da maquina.**

---

### Documentação oficial sobre Data Fetching

https://nextjs.org/docs/pages/building-your-application/data-fetching

#### Sobre Rota Dinâmica do Next.js

Criar uma pasta dentro de `pages` com o nome da página e criar um arquivo dentro da pasta criada com o nome do parâmetro entre []. Ex. página `posts` e parâmetro `[id].jsx`, então criamos a pasta `posts` e dentro dela o arquivo `[id].jsx`

**Obs. As funções abaixo so funcionam com o uso das rotas dinâmicas.**

#### Sobre a função getStaticProps

Após o processamento da função de SSR(Server Side Rendering), a `getStaticProps` retorna uma propriedade chamada "props", e nesta colocamos um objeto com as props que queremos usar. Podendo ser nomeada com qualquer nome e é na props que passamos os dados do fetch da API.

#### Sobre a função getServerSideProps

Pode ser útil para páginas cujos dados mudam frequentemente ou são diferentes para cada usuário (como no uso de dados de geolocalização) tendo a mesma utilização porem com propositos diferentes.

#### Sobre a função getStaticPaths

Utilizado para pre-renderizar páginas que usam rotas dinâmicas e dependem de parâmeteros(params) do `getStaticProps` para serem construídas.

---
