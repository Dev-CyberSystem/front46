import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import axios from "axios";

const Register = () => {
  const [dataUser, setDataUser] = useState({
    nombre: "",
    apellido: "",
    email: "",
    password: "",
    telefono: "",
    rol: "usuario",
  });

  const handleChange = (e) => {
    setDataUser({
      ...dataUser, // recupera los datos que ya tenia
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const response = axios.post("https://back44.vercel.app/api/user/register", dataUser);
      setDataUser({
        nombre: "",
        apellido: "",
        email: "",
        password: "",
        telefono: "",
        rol: "usuario",
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Container>
        <Row>
          <Col>
            <h1>Registro</h1>

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="nombre" className="form-label">
                  Nombre
                </label>
                <br />
                <input
                  type="text"
                  name="nombre"
                  value={dataUser.nombre}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="apellido" className="form-label">
                  Apellido
                </label>
                <br />
                <input
                  type="text"
                  name="apellido"
                  value={dataUser.apellido}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <br />
                <input
                  type="email"
                  name="email"
                  value={dataUser.email}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <br />
                <input
                  type="password"
                  name="password"
                  value={dataUser.password}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="telefono" className="form-label">
                  Telefono
                </label>
                <br />
                <input
                  type="number"
                  name="telefono"
                  value={dataUser.telefono}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <input
                  type="hidden"
                  name="rol"
                  value={dataUser.rol}
                  onChange={handleChange}
                />
              </div>
              <Button variant="outline-success" type="submit">
                Enviar
              </Button>
            </form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Register;
