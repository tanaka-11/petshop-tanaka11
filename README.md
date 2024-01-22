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
- Configurar o next.config para renderização do styled-component adicionando as seguinte linhas

```javascript
  // Adicione estas linhas
  compiler: {
    styledComponents: true,
  },
```

### Lembrete sobre o JSON server

- Instala-lo de maneira global `npm install -g json-server`
- Colocação do arquivo `db.json` na raiz do projeto(ele servira como um banco de dados para a API)
- Rodar o servidor com o comando `json-server --watch db.json` dentro da pasta do projeto com o comando `cd/nomedapasta/projeto` utilizando o node.js command prompt
- Para evitar conflitos nas portas utilizar o script personalizado no `package.json` com a seguinte configuração `"api": json-server --host 10.20.46.32 db.json --port 2112` e depois rodar o servidor `npm run api`. **Obs: em casa trocar para o ip da maquina.**
