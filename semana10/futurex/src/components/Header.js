import React from "react";
import styled from "styled-components";
import Logo from "../images/logo.png"

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  background-color: transparent;
  height: 10vh;
  position: absolute;
`;

const Image = styled.img  `
  height: 10vh;
`

export class Header extends React.Component {
  render() {
    return (
      <StyledHeader>
        <Image src= {Logo}alt= "website logo"/>
      </StyledHeader>
    );
  }
}
