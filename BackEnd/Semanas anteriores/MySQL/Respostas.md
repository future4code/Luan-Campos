# Exercícios

### Exercício 1
  - A) O _VARCHAR(x)_ serve para declarar strings de no máximo x caracteres; O _Date_ representa uma data; O _ID_ é uma PK.
  - B) _SHOW DATABASES_: retorna todos os meus bancos de dados; _SHOW TABLES_: retorna as tabelas criadas no meu banco atual.
  - C) DESCRIBE Actor: mostra os detalhes da tabela ACTOR.

### Exercício 2
  - B) O erro aconteceu por causa da ID "002" que já existe. O campo é uma primary key, logo não aceita valores repetidos.
  - C) O erro ocorre porque faltam declarar os campos _birth_date_ e _gender.
  - D) O erro ocorre pois o parâmetro _name_ não é passado.
  - E) O erro ocorre pois a data passada não está entre aspas.
  
### Exercício 3
  - A) ```SELECT * from Actor WHERE gender = "female";```
  - B) ```SELECT salary from Actor WHERE name = "Tony Ramos";```
  - C) ```SELECT * from Actor WHERE gender = "Invalid";``` Ele retorna o que tiver "null".
  - D) ```SELECT id, name, salary from Actor WHERE salary <= 500000;```
  - E) ```SELECT id, name from Actor WHERE id = "002";``` O "name" estava escrito errado.
 
### Exercício 3
  - A) A query faz uma procura na tabela ator em que o nome comece com a letra _A_ ou a letra J e o salário seja maior que R$300000.
  - B) ```SELECT * from Actor WHERE name NOT LIKE "A%" AND salary > 300000;```
  - C) ```SELECT * from Actor WHERE name LIKE "%g%";```
  - D) ```SELECT * from Actor WHERE (name LIKE "%g%" or name LIKE "%a%") AND salary BETWEEN 350000 AND 900000;```
 
### Exercício 5
  - A) A query foi usada com o tipo _TEXT_ que suporta muito mais caracteres do que o tipo _VARCHAR_.

### Exercício 6
  - A) ```SELECT id, title, rating FROM Movie WHERE id = "004";```
  - B) ```SELECT * FROM Movie WHERE title = "Cidade de Deus";```
  - C) ```SELECT id, title, synopsis FROM Movie WHERE rating >= 7;```

### Exercício 7
  - A) ```SELECT * FROM Movie WHERE title LIKE "%vida%";```
  - B) ```SELECT * FROM Movie WHERE title LIKE "%ano%" OR synopsis LIKE "%ano%";```
  - C) ```SELECT * FROM Movie WHERE release_date < "2020-06-08"```
  - D) ```SELECT * FROM Movie WHERE release_date < "2020-06-08" AND title LIKE "%ano%" OR synopsis LIKE "%ano%" AND rating >= 7```