import Cabecalho from "../Templates/Cabecalho";
import Rodape from "../Templates/Rodape";
import FormCadastroCandidato from "../Formularios/FormCadastroCandidato";

export default function TelaCadastroCandidato() {
  return (
    <div>
      <Cabecalho />
      <FormCadastroCandidato />
      <Rodape />
    </div>
  );
}
