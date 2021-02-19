import React from "react";
import styled from "styled-components";
import logo_tegra from "../../assets/images/logo-tegra.png";
import { corPrimaria } from "../UI/variaveis";

const BtnCabecalho = styled.a`
  text-align: center;
  border-radius: 3px;
  padding: 5px 20px;
  margin: 0 10px;
  font-weight: 600;
  border: 2px solid white;

  background: ${(props) => (props.primary ? "white" : corPrimaria)};
  color: ${(props) => (props.primary ? corPrimaria : "white")};
`;

const StyledCabecalho = styled.nav`
  background-color: ${corPrimaria};
  display: flex;
  justify-content: space-between;
  padding: 0 15vw;
  height: 10vh;
  align-items: center;
`;

const Logo = styled.img`
  height: 50px;
  width: 150px;
`;

const Cabecalho = () => {
  return (
    <StyledCabecalho>
      <Logo src={logo_tegra} alt="Logo Smart Bank" />
      <div>
        <BtnCabecalho primary href="https://google.com">
          Login
        </BtnCabecalho>
        
      </div>
    </StyledCabecalho>
  );
};

export default Cabecalho;
