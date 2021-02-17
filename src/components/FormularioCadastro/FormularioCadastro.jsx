import React, { useEffect, useState } from "react";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";
import DadosEntrega from "./DadosEntrega";
import {StepLabel, Stepper, Typography, Step} from "@material-ui/core";


function FormularioCadastro({ aoEnviar, validarCPF }) {
  const [etapaAtual, setEtapaAtual] = useState(0);
  const [dadosColetado, setDados] = useState({});
  
  useEffect(()=>{
    if(etapaAtual === formularios.length-1){
      aoEnviar(dadosColetado)
      console.log(dadosColetado.nome)
    }
    
  })

  const formularios = [
<DadosUsuario aoEnviar={coletarDados}  />,
<DadosPessoais aoEnviar={coletarDados} validarCPF={validarCPF} />,
<DadosEntrega aoEnviar={coletarDados} />,
<Typography variant="h5">Obrigado pelos dados Cadastrados {dadosColetado.nome}</Typography>
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
    <Stepper activeStep={etapaAtual}>
      <Step><StepLabel>Login</StepLabel></Step>
     <Step> <StepLabel>Pessoal</StepLabel></Step>
      <Step><StepLabel>Entrega</StepLabel></Step>
      <Step><StepLabel>Finalização</StepLabel></Step>
    </Stepper>
    {formularios[etapaAtual]}

    </>
  );
}



export default FormularioCadastro;
