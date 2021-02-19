import React from "react";
import "./App.css";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import "fontsource-roboto";
import { GlobalStyle } from "./GlobalStyle";
import {Container} from './StyledComponentes/Container'
import ValidacoesCadastro from "./contexts/ValidacoesCadastro";
import { validarCPF, validarSenha } from "./models/cadastro";
import Cabecalho from './StyledComponentes/Cabecalho';
import Footer from "./StyledComponentes/Footer";
import Titulo from "./StyledComponentes/Titulo"

function App() {
 
    return (
      <>
      <GlobalStyle />
      <Cabecalho />
      <Container >
     
      <ValidacoesCadastro.Provider
        value={{ cpf: validarCPF, senha: validarSenha, nome: validarSenha }}
      >
        <FormularioCadastro aoEnviar={aoEnviarForm} />
      </ValidacoesCadastro.Provider>
    </Container>
    <Footer/>
    </>
    );
 
}

function aoEnviarForm(dados){
  console.log(dados);
}



export default App;
