import { TextField, Button } from "@material-ui/core";
import React, { useState } from "react";
function DadosUsuario({ aoEnviar }) {
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        aoEnviar({email, senha});
      }}
    >
      <TextField
      value={email}
      onChange={(event)=>{
        setEmail(event.target.value)
      }}
        variant="outlined"
        margin="normal"
        fullWidth
        id="email"
        label="Email"
        type="email"
        required
      />
      <TextField
      value={senha}
      onChange={(event)=>{
        setSenha(event.target.value)
      }}
        required
        variant="outlined"
        margin="normal"
        fullWidth
        id="senha"
        label="Senha"
        type="password"
      />
      <Button type="submit" variant="contained" color="primary">
        Continuar
      </Button>
    </form>
  );
}
export default DadosUsuario;
