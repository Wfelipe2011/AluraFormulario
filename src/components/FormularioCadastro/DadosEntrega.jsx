import React, { useEffect, useState } from "react";
import { TextField, Button } from "@material-ui/core";

function DadosEntrega({ aoEnviar }) {
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState("");
  const [numero, setNumero] = useState("");
  const [estado, setEstado] = useState("");
  const [cidade, setCidade] = useState("");

  useEffect(() => {
    if (cep.length == 8) {
      const url = `https://viacep.com.br/ws/${cep}/json/`;
      fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          atribuirCampos(data);
        });
    }
  });

  function atribuirCampos(data) {
    setEndereco(data.logradouro);
    setCidade(data.localidade);
    setEstado(data.uf);
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        aoEnviar({ cep, endereco, numero, estado, cidade });
      }}
    >
      <TextField
       required
        value={cep}
        onChange={(event) => {
          setCep(event.target.value);
        }}
        label="CEP"
        required
        variant="outlined"
        margin="normal"
        id="cep"
        type="number"
      />
      <TextField
       required
        value={endereco}
        onChange={(event) => {
          setEndereco(event.target.value);
        }}
        label="Endereço"
        variant="outlined"
        margin="normal"
        fullWidth
        id="endereco"
        type="text"
      />
      <TextField
       required
        value={numero}
        onChange={(event) => {
          setNumero(event.target.value);
        }}
        label="Numero"
        variant="outlined"
        margin="normal"
        id="numero"
        type="number"
      />
      <TextField
       required
        value={estado}
        onChange={(event) => {
          setEstado(event.target.value);
        }}
        label="Estado"
        variant="outlined"
        margin="normal"
        id="estado"
        type="text"
      />
      <TextField
       required
        value={cidade}
        onChange={(event) => {
          setCidade(event.target.value);
        }}
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
