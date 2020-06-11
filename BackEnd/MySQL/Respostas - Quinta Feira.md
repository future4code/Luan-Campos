# Exercícios 

### EXERCÍCIO 1
- A) É uma chave que serve para referenciar uma linha em outra tabela;
- C) Ele da erro e reclama que não existe essa id para referenciar;
- E) Ele da erro e fala que a coluna _rating_ não existe;

### EXERCÍCIO 2
- A) Ela é uma tabela que possui uma coluna de ID de filme e uma de ID de ator/atriz, ambas, respectivamente, fazem referência à outra tabela;
- C) Ele da erro porque o ID não existe;
- D) Ele não deixa deletar, porque existe uma tabela que faz referência a esse ator;

### EXERCÍCIO 3
- A) O _ON_ serve para juntar a tabela _Rating_ com os filmes que tiverem seu ID dentro dela;
- B) ```SELECT title, movie_id, R.rate as rating FROM Rating R JOIN Movie M ON movie_id = M.id;```

### EXERCÍCIO 4
- A)```SELECT title, M.id, R.rate as Rating, R.comment AS Comment FROM Movie M LEFT JOIN Rating R ON M.id = movie_id;```
- B)```SELECT M.id AS Movie_ID, M.title, MC.actor_id FROM MovieCast MC RIGHT JOIN Movie M ON M.id = MC.movie_id;```
- C)```SELECT AVG(R.rate), M.id, M.title FROM Movie M LEFT JOIN Rating R ON M.id = R.movie_id GROUP BY M.id;```