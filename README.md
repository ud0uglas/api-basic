
# API Basic

Uma API básica para gerenciar usuários. A API permite operações de CRUD (Create, Read, Update, Delete) em usuários.  

## Endpoints

### Obter Todos os Usuários

**Método:** `GET`  
**URL:** `http://localhost:3000/api/users`  

**Resposta de Exemplo:**  
```json
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

---

### Criar Usuário

**Método:** `POST`  
**URL:** `http://localhost:3000/api/users`  

**Corpo da Requisição:**  
```json
{
  "name": "teste",
  "email": "teste02@gmail.com"
}
```

**Resposta de Exemplo:**  
```json
{
  "id": 3,
  "name": "teste",
  "email": "teste02@gmail.com"
}
```

---

### Atualizar Usuário

**Método:** `PUT`  
**URL:** `http://localhost:3000/api/users`  

**Corpo da Requisição:**  
```json
{
  "id": 1,
  "name": "Novo Nome",
  "email": "novoemail@example.com"
}
```

**Resposta de Exemplo:**  
```json
{
  "id": 1,
  "name": "Novo Nome",
  "email": "novoemail@example.com",
  "updated": true
}
```

---

### Deletar Usuário

**Método:** `DELETE`  
**URL:** `http://localhost:3000/api/users/1`  

**Resposta de Exemplo:**  
```json
{
  "id": 1,
  "deleted": true
}
```

---

## Instruções

1. **Clonar o Repositório**  
   ```bash
   git clone https://github.com/ud0uglas/api-basic.git
   cd api-basic
   ```

2. **Instalar Dependências**  
   ```bash
   npm install
   ```

3. **Iniciar o Servidor**  
   ```bash
   npm start
   ```

4. **Acessar a API**  
   A API estará disponível em `http://localhost:3000`.

---

## Tecnologias Utilizadas

- **Node.js**
- **Express.js**

---

## Contribuição

Sinta-se à vontade para contribuir! Faça um fork, crie uma branch com suas alterações e envie um pull request.

---

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
