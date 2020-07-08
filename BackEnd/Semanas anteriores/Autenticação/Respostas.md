# Exercícios 

### EXERCÍCIO 1
- A) Sim, pois o leque de possibilidades de se criar um ID em string é muito maior e mais seguro que usar apenas números.

### EXERCÍCIO 2
- A) A const _createUser_ recebe 3 parâmetros, e com eles cria-se um novo usuário no banco de dados.
- B) ```CREATE TABLE Users (
	id VARCHAR(255) PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);```

### EXERCÍCIO 3
- A) Ela lê o JWT_KEY como uma string. Precisamos fazer isso pois ele retorna OU string OU undefined.
