import React from "react";
import { TextField, Button } from "@material-ui/core";

function DadosEntrega() {
  return (
    <form>
      <TextField
        label="CEP"
        variant="outlined"
        margin="normal"
        id="cep"
        type="number"
      />
      <TextField
        label="Endereço"
        variant="outlined"
        margin="normal"
        fullWidth
        id="endereco"
        type="number"
      />
      <TextField
        label="Numero"
        variant="outlined"
        margin="normal"
        id="numero"
        type="number"
      />
      <TextField
        label="Estado"
        variant="outlined"
        margin="normal"
        id="estado"
        type="text"
      />
      <TextField
        label="Cidade"
        variant="outlined"
        margin="normal"
        id="cidade"
        type="text"
      />

      <Button type="submit" variant="contained" color="primary" fullWidth>
        Finalizar Cadastro
      </Button>
    </form>
  );
}
export default DadosEntrega;
