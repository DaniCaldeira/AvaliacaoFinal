import { Container, Form, Button } from "react-bootstrap";

export default function FormLogin() {
  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-4">
          <Container className="border p-5 m-5 rounded">
            <Form>
              <Form.Group className="mb-3" controlId="usuario">
                <Form.Label>Usuário:</Form.Label>
                <Form.Control
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Informe o nome do usuário"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="senha">
                <Form.Label>Senha</Form.Label>
                <Form.Control
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Digite sua senha"
                />
              </Form.Group>
              <div className="row justify-content-center">
                <Button variant="success" type="submit">
                  Entrar
                </Button>
                <Button href="/cadastro">Cadastrar</Button>
              </div>
            </Form>
          </Container>
        </div>
      </div>
    </div>
  );
}
