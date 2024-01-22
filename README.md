# Projeto Petshop com Next.js

# Recursos Utilizados

- Next.js
- API Local e API via Firebase Realtime Database
- Componentes
- Rotas
- Map, Filter
- Manipulação de formulário
- Publicação na Vercel e Netlify

### Lembrete sobre o styled-component

- Instalar `npm install styled-components`
- Configurar o next.config para renderização do styled-component

### Lembrete sobre o JSON server

- Instalar de maneira global `npm install -g json-server`
- Rodar o servidor com o comando `json-server --watch db.json` dentro da pasta do projeto com o comando `cd/nomedapasta/projeto` utilizando o node.js command prompt
- Para evitar conflitos nas portas utilizar o comando `json-server --host 10.20.46.32 db.json --port 2112`. Utilizamos um script personalizado onde inves de escrever todo primeiro comando podemos utilizar o `npm run api`. **Obs: em casa trocar para o ip da maquina.**
