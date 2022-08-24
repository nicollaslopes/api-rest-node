Esse projeto é uma API REST de CRUD de estudante.

## Ferramentas utilizadas

- Node.js
- Banco de Dados: PostgreSQL
- Express
- Docker

## Para testar em uma máquina

- Clone e acesse o diretório do projeto, instale as dependências com o comando `npm install`.
- Inicie o container do PostgreSQL com o comando `sudo docker compose up -d`.
- Coloque 
- Para executar a conectar a API execute no seu terminal o comando `npm start`.

## Endpoints da API

#### `POST /api/v1/students/` - cria um estudante;

```
{
	"name": "nome teste",
	"email": "teste@teste.com",
	"age": 20,
	"birthday": "10/10/2010"
}
```