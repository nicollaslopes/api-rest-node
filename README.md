Esse projeto é uma API REST de CRUD de estudante.

## Ferramentas utilizadas

- Node.js
- Banco de Dados: PostgreSQL
- Express
- Docker

## Para testar em uma máquina

- Clone e acesse o diretório do projeto, instale as dependências com o comando `npm install`.
- Inicie o container do PostgreSQL com o comando `sudo docker compose up -d`.
- Altere o arquivo `db.js` localizado na raíz do projeto por suas credenciais do banco de dados.
- Para iniciar o projeto, execute no seu terminal o comando `npm start`.

## Endpoints da API

#### `POST /api/v1/students/` - cria um estudante;

```json
{
  "name": "nome teste",
  "email": "teste@teste.com",
  "age": 20,
  "birthday": "10/10/2010"
}
```

#### `PUT /api/v1/students/{id}` - atualiza o nome de um estudante;

```json
{
  "name": "nome teste 2"
}
```

#### `DELETE /api/v1/students/{id}` - deleta um estudante;

#### `GET /api/v1/students/` - retorna todos os estudantes;

#### `GET /api/v1/students/{id}` - retorna um estudante pelo id;