import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  background-color: transparent;
  height: 10vh;
  position:absolute;
`;

const StyledFooter = styled.footer`
  background-color: yellow;
  height: 7vh;
`;

export class Header extends React.Component {
  render() {
    return <StyledHeader>FOTO DA LOGO</StyledHeader>;
  }
}

