import { Table } from "react-bootstrap";

export default function ListaIncricoes(props) {
  return (
    <Table striped bordered>
      <thead>
        <tr>
          <th>Id</th>
          <th>Cargo</th>
          <th>Local</th>
          <th>Salário</th>
        </tr>
      </thead>
      <tbody>
        {props.inscricoes ? (
          props.inscricoes.map((vaga, index) => (
            <tr>
              <td>{vaga.vag_id}</td>
              <td>{vaga.vag_cargo}</td>
              <td>{vaga.vag_local}</td>
              <td>R${vaga.vag_salario},00</td>
            </tr>
          ))
        ) : (
          <span>Carregando...</span>
        )}
      </tbody>
    </Table>
  );
}
