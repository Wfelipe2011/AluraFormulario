import { TextField, Button } from "@material-ui/core";
import React from "react";
function DadosUsuario({aoEnviar}) {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
       aoEnviar();
      }}
    >
      <TextField
        variant="outlined"
        margin="normal"
        fullWidth
        id="email"
        label="Email"
        type="email"
        required
      />
      <TextField
       required
        variant="outlined"
        margin="normal"
        fullWidth
        id="senha"
        label="Senha"
        type="password"
      />
      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
}
export default DadosUsuario;
