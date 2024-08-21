# Projeto de API RESTful com Node.js, TypeScript e Prisma

Este projeto é uma API RESTful desenvolvida com Node.js e TypeScript, utilizando o Prisma como ORM. A API permite realizar operações de compra, venda, listagem e criação de produtos, com controle de estoque.

## Índice
- [Projeto de API RESTful com Node.js, TypeScript e Prisma](#projeto-de-api-restful-com-nodejs-typescript-e-prisma)
  - [Índice](#índice)
  - [Sobre](#sobre)
  - [Instalação](#instalação)
  - [Uso](#uso)
    - [Exemplos de Requisições](#exemplos-de-requisições)
  - [Estrutura do Projeto](#estrutura-do-projeto)
  - [Tecnologias Utilizadas](#tecnologias-utilizadas)
  - [Testes](#testes)
  - [Contribuição](#contribuição)
  - [Licença](#licença)
  - [Contato](#contato)

## Sobre

Esta API foi criada para gerenciar um estoque de produtos, permitindo operações de compra, venda, criação e listagem de produtos. O sistema verifica automaticamente a disponibilidade de estoque ao realizar vendas e retorna mensagens de erro claras em caso de falhas.

## Instalação

Para configurar o ambiente de desenvolvimento, siga os passos abaixo:

1. Clone o repositório:
   ```bash
   git clone https://github.com/AndreAragaoSoftware/SOLID-MVC-TypeScript-API-
   ```
2. Navegue até o diretório do projeto:
   ```bash
   cd  SOLID-MVC-TypeScript-API
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Configure as variáveis de ambiente (se necessário):
   - Crie um arquivo `.env` na raiz do projeto e configure as variáveis conforme necessário.

## Uso

Para rodar o projeto localmente:

1. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
2. O servidor será iniciado em `http://localhost:8000`.

### Exemplos de Requisições

- **Listar Produtos**
  - **GET** `/products`
- **Criar Produto**
  - **POST** `/products/create`
  - Corpo da requisição:
    ```json
    {
      "name": "Produto Exemplo",
      "price": 100.00
    }
    ```
- **Comprar Produto**
  - **POST** `/products/:id/buy`
  - Corpo da requisição:
    ```json
    {
      "amount": 10
    }
    ```
- **Vender Produto**
  - **POST** `/products/:id/sell`
  - Corpo da requisição:
    ```json
    {
      "amount": 5
    }
    ```

## Estrutura do Projeto

Abaixo está a estrutura de pastas do projeto:

```plaintext
src/
├── api/
│   ├── express/
│   │   ├── api.express.ts
│   │   └── controllers/
│   │       └── product.controller.ts
├── entities/
│   └── product.ts
├── repositories/
│   └── product/
│       ├── prisma/
│       │   └── product.repository.prisma.ts
│       └── product.repository.ts
├── services/
│   └── product/
│       ├── implementation/
│       │   └── product.services.implementation.ts
│       └── product.services.ts
├── util/
│   └── prisma.util.ts
└── main.ts
```

- **api/**: Contém a configuração do Express e os controladores.
- **entities/**: Define as entidades principais do projeto.
- **repositories/**: Contém as implementações de repositório, incluindo a integração com Prisma.
- **services/**: Contém a lógica de negócios e serviços.
- **util/**: Utilitários e configurações adicionais.
- **main.ts**: Ponto de entrada da aplicação.

## Tecnologias Utilizadas

As principais tecnologias e ferramentas utilizadas neste projeto incluem:

- **Node.js**
- **Express**
- **TypeScript**
- **Prisma**
- **REST Client** (para testes de API)
- **Git** (para controle de versão)

## Testes

Para rodar os testes de integração e validar os endpoints da API, utilize o REST Client no Visual Studio Code. Você pode escrever e enviar requisições HTTP diretamente do editor.

## Contribuição

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do projeto.
2. Crie uma nova branch (`git checkout -b feature/nova-feature`).
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`).
4. Faça o push para a branch (`git push origin feature/nova-feature`).
5. Abra um Pull Request.

## Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## Contato

- **André Aragão** - [LinkedIn](https://www.linkedin.com/in/andrearagaodeveloper/) - andrearagao.softwaredeveloper@gmail.com
- Projeto Link: [https://github.com/AndreAragaoSoftware/SOLID-MVC-TypeScript-API-](https://github.com/AndreAragaoSoftware/SOLID-MVC-TypeScript-API-)
