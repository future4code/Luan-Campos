import styled from "styled-components";

export const Wrapper = styled.div`
  text-align: center;
`;

export const Form = styled.form``;

export const WrapperWeek = styled.div`
  width: 1400px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  margin: 0 auto;

  ul {
    width: 100%;
    display: flex;
    flex-direction: column;

    li {
      list-style: none;
      width: 100px;
      border: 1px solid blue;
      margin-top: 10px;
    }
  }
`;

export const dias = [
  "Segunda",
  "Terça",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sábado",
  "Domingo",
];