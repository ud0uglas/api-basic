# api-basic

```json
Ober Users
GET - http://localhost:3000/api/users

[
	{
		"id": 1,
		"name": "Douglas",
		"email": "douglas@gmail.com"
	},
	{
		"id": 2,
		"name": "Douglas",
		"email": "douglas2@gmail.com"
	}
]
```

```json
Criar User
POST - http://localhost:3000/api/users

{
	"name": "teste",
	"email": "teste02@gmail.com"
}
```

```json
Atualizar User
POST - http://localhost:3000/api/users

{
  "id": 1,
  "name": "Novo Nome",
  "email": "novoemail@example.com"
}
```

```json
Deletar User
DELETE - http://localhost:3000/api/users/1
```
