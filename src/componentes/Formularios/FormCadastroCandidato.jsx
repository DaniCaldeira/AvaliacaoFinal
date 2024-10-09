import { Container, Form, Button } from "react-bootstrap";

export default function FormCadastroCandidato() {
  return (
    <div className="row justify-content-center">
      <div className="col-8">
        <Container className="border p-5 m-5 rounded">
          <Form>
            <Form.Group>
              <Form.Label>Nome:</Form.Label>
              <Form.Control
                type="text"
                id="nome"
                name="nome"
                placeholder="Digite o seu nome"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>CPF:</Form.Label>
              <Form.Control
                type="text"
                id="cpf"
                name="cpf"
                placeholder="Digite o seu CPF"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Data de Nascimento:</Form.Label>
              <Form.Control
                type="date"
                id="data"
                name="data"
                placeholder="Digite a data do seu nascimento"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Telefone:</Form.Label>
              <Form.Control
                type="text"
                id="telefone"
                name="telefone"
                placeholder="Digite o seu telefone"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Senha:</Form.Label>
              <Form.Control
                type="password"
                id="senha"
                name="senha"
                placeholder="Crie sua senha"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Curriculo:</Form.Label>
              <Form.Control type="file" id="curriculo" name="curriculo" />
            </Form.Group>

            <div className="row justify-content-center">
              <Button variant="success" type="submit">
                Cadastrar
              </Button>
              <Button href="/login">Login</Button>
            </div>
          </Form>
        </Container>
      </div>
    </div>
  );
}
