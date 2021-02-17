import React, { useState, useContext } from "react";
import { TextField, Button } from "@material-ui/core";
import ValidacoesCadastro from "../../contexts/ValidacoesCadastro";
import useErros from "../../hooks/useErros";

function DadosUsuario({ aoEnviar }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const validacoes = useContext(ValidacoesCadastro)
  const [erros, validarCampos, possoEnviar] = useErros(validacoes);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (possoEnviar()) {
          aoEnviar({ email, senha });
        }
      }}
    >
      <TextField
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
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
        onChange={(event) => {
          setSenha(event.target.value);
        }}
        onBlur={validarCampos}
        error={!erros.senha.valido}
        helperText={erros.senha.texto}
        required
        variant="outlined"
        margin="normal"
        fullWidth
        id="senha"
        name="senha"
        label="Senha"
        type="password"
      />

      <Button type="submit" variant="contained" color="primary">
        Próximo
      </Button>
    </form>
  );
}
export default DadosUsuario;
