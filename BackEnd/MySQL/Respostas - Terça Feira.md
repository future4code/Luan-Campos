# Exercícios 

### EXERCÍCIO 1
- A) O comando altera a tabela _Actors_, excluindo a coluna _salary_;
- B) O comando altera o nome e o tipo da coluna _gender_;
- C) O comando altera o tipo da coluna _gender_;
- D) ```ALTER TABLE Actor CHANGE gender gender VARCHAR(100);```

### EXERCÍCIO 2
- A) ```UPDATE Actor SET name = "Fernanda MonteBranco" where id = 003;```
- B) ```UPDATE Actor SET name = "JULIANA PÃES" where name = "Juliana Paes";```
- C) ```UPDATE Actor SET salary = 295000, birth_date = "1980-05-20" WHERE id = "005";```
- D) Não aconteceu nada com o ID inexistente. Ele retorna sem erros, mostrando que não houve efeito nenhum.

### EXERCÍCIO 3
- A) ```DELETE FROM Actor WHERE name = "Fernanda MonteBranco";```
- B) ```DELETE FROM Actor WHERE gender = "male" AND salary > 1000000;```

### EXERCÍCIO 4
- A) ```SELECT MAX(salary) FROM Actor;```
- B) ```SELECT MIN(salary) FROM Actor;```
- C) ```SELECT COUNT(*) FROM Actor WHERE gender = "female";```
- D) ```SELECT SUM(salary) FROM Actor;```

### EXERCÍCIO 5
- A) A query retorna a quantidade de atores e atrizes, e quantos são homens e quantos são mulheres.
- B) ```SELECT id, name FROM Actor ORDER BY name DESC;```.
- C) ```SELECT * FROM Actor ORDER BY salary;```.
- D) ```SELECT * FROM Actor ORDER BY salary;```.
- E) ```SELECT AVG(salary), gender FROM Actor GROUP BY gender;```.

### EXERCÍCIO 6
- A) ```ALTER TABLE Movie ADD playing_limit_date DATE;```.
- B) ```ALTER TABLE Movie CHANGE rating rating FLOAT;```.
- C) ```UPDATE Movie SET playing_limit_date = "2020-10-13" WHERE id = "004";```
```UPDATE Movie SET playing_limit_date = "2020-05-11" WHERE id = "001";```.
- D) Eke realiza a ação mas nada acontece.

### EXERCÍCIO 7
- A) 2 filmes.
- B) 8.3.
- C) 1 filme, pois a maioria esta como _null_ em _playing_limit_date_.
- D) 0 filmes.
- E) Nota 10.
- F) Nota 7.

### EXERCÍCIO 8
- A) ```SELECT * FROM Movie ORDER BY title ASC;```
- B) ```SELECT * FROM Movie ORDER BY title DESC LIMIT 5;```
- C) ```SELECT * FROM Movie ORDER BY release_date DESC LIMIT 3;```
- D) ```SELECT * FROM Movie ORDER BY rating DESC LIMIT 3;```
