import { Table } from "react-bootstrap";

export async function ListaCandidatosNaVaga(props) {
  console.log(props.idVaga);
  return (
    <Table striped bordered>
      <thead>
        <tr>
          <th>Id</th>
          <th>Nome</th>
          <th>Telefone</th>
          <th>Currículo</th>
        </tr>
      </thead>
      <tbody>
        {/* {props.candidatos ? (
          props.candidatos.map((candidato, index) => (
            <tr>
              <td>{candidato.usu_id}</td>
              <td>{candidato.usu_nome}</td>
              <td>{candidato.usu_tel}</td>
              <td>{candidato.usu_curriculo}</td>
            </tr>
          ))
        ) : (
          <span>Carregando...</span>
        )} */}
      </tbody>
    </Table>
  );
}
