import React, { useEffect, useState } from "react";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";
import DadosEntrega from "./DadosEntrega";
import {StepLabel, Stepper, Typography, Step} from "@material-ui/core";
import {Container} from '../../StyledComponentes/Container';
import Titulo from "../../StyledComponentes/Titulo"




function FormularioCadastro({ aoEnviar, validacoes }) {
  const [etapaAtual, setEtapaAtual] = useState(0);
  const [dadosColetado, setDados] = useState({});
  
  useEffect(()=>{
    if(etapaAtual === formularios.length-1){
      aoEnviar(dadosColetado)
      console.log(dadosColetado.nome)
    }
    
  })

  const formularios = [
<DadosUsuario aoEnviar={coletarDados} validacoes={validacoes} />,
<DadosPessoais aoEnviar={coletarDados} validacoes={validacoes} />,
<DadosEntrega aoEnviar={coletarDados} validacoes={validacoes}/>,
<Typography variant="h5" >Obrigado {dadosColetado.nome} pelos dados cadastrados!</Typography>
  ];

  function coletarDados(dados){
    setDados({...dadosColetado, ...dados});
    proximo();
  }

  function proximo(){
    setEtapaAtual(etapaAtual+1);
  }
  return (
    <>
    
    <Container >
    <Titulo> Formulário de cadastro</Titulo>
    <Stepper activeStep={etapaAtual}>
      <Step><StepLabel>Login</StepLabel></Step>
      <Step><StepLabel>Pessoal</StepLabel></Step>
      <Step><StepLabel>Entrega</StepLabel></Step>
      <Step><StepLabel>Fim</StepLabel></Step>
    </Stepper>
    {formularios[etapaAtual]}

    </Container>
    </>
  );
}



export default FormularioCadastro;
