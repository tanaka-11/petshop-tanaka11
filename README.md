# Projeto Petshop com Next.js em formato PWA

# Recursos Utilizados

- Next.js
- API Local e API via Firebase Realtime Database
- Componentes
- Rotas
- Map, Filter
- Manipulação de formulário
- Publicação na Vercel e Netlify

---

### PWA - Progressive Web Application

Significa **_(Aplicativo Web Progressivo)_**. Trata-se de uma abordagem de desenvolvimento de aplicativos web que visa combinar características de sites e aplicativos móveis. Elas são construidas com tecnologias web tradicionais (HTML5, CSS e JavaScript) e oferecem uma experiência semelhante à aplicativos nativos, podendo serem instaladas em dispositivos móveis.

#### Requisitos para PWA

**1. Arquivo de manifesto**: Se trata de um arquivo chamado `manifest.json` com informações gerais sobre o aplicativo: nome, descrição, ícones, cores e etc. Ele deve ser colocado na pasta `public` e adicionado via `link` na página `_document.js` dentro do `<Head>`

**2. Criar e configurar um Service Worker (JavaScript)**: Se trata de um script que o navegador executa em segundo plano, de forma independente da interface ou de interações do usuário. Ele permite usar recursos que transformam a aplicação em PWA, como instalação/desinstalação, cache offline, notificações e etc. No caso do Next.js, o `Service Worker` será criado e configurado automaticamente com o auxílio da lib `next-pwa` e ajuste no `next.config.js`. **_Obs. Utilizar o comando `npm install next-pwa` para a instalação da lib_**

**3. Publicação em servidor com suporte à HTTPS**: Utilizamos a Vercel e Netlify para sua publicação.

---

### Sites úteis para o projeto

Conversões para Firebase - https://tableconvert.com/json-to-firebase

Teste de SEO - https://pagespeed.web.dev/

---

### Informações do DataBase(NoSQL) via Firebase

https://petshop-tanaka11-default-rtdb.firebaseio.com/ - Link do Database

Firebase é uma plataforma de serviços web com uma série de funcionalidades de Back-End úteis para aplicações (web, app e jogos). No caso do projeto utilizamos o firebase para adicionar um database chamado "Firebase Realtime Database" para utilização como API JSON. Ele funciona como um **Database não relacional(NoSQL)**, ou seja, baseado em documentos(objetos) no formato JSON.

**_Obs. para teste utilizamos a extensão Thunder Client e não é necessario mais a utilização do Node Command Prompt para inicialização da API._**

Como estamos utilizando uma API JSON podemos utilizar os verbos HTTP no padrão REST:

- **GET** - Obter Dados
- **POST** - Criar Dados
- **PUT** - Atualizar Todos os Dados
- **PATCH** - Atualizar Alguns Dados
- **DELETE** - Deletar Dados

#### Ajustes necessários para o uso da API via Firebase

- Em `index.jsx`: Alterar a getStaticProps ajustando o endpoint adicionando `.json` depois do parametro e gerando um novo array com os objetos carregados atraves da `const dados`

- Em `[id].jsx`: Alterar a getStaticProps ajustando o endpoint para `posts/{id}.json`

---

### Lembrete sobre o "styled-component"

- Instalar `npm install styled-components`
- Configurar o next.config para renderização do styled-component adicionando as seguinte linhas

```javascript
  // Adicione estas linhas
  compiler: {
    styledComponents: true,
  },
```

---

### Lembrete sobre o "React Hook Form"

- Instalar `npm install react-hook-form`

---

### Lembrete sobre o "JSON server"

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
