import {useState, useContext} from 'react'
import { Container, Row, Col, Button } from "react-bootstrap";
import { UsuariosContext } from "../../context/UserContext";
// eslint-disable-next-line react/prop-types
const FormUpdateUser = ({editUser, handleClose}) => {

    const [usuario, setUsuario] = useState(editUser)

    const { updateUsuarios } = useContext(UsuariosContext)

    // eslint-disable-next-line react/prop-types
    
    const handleChange = (e) => {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    }

    const handleEdit = (e) => {
        e.preventDefault()
        updateUsuarios(usuario)
        handleClose()
    }

  return (
    <>
    <Container>
      <Row>
        <Col>
          <h1>Formulario de Usuarios</h1>
          <form onSubmit={handleEdit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Nombre
              </label>
              <input
                type="text"
                value={usuario.nombre}
                onChange={handleChange}
                className="form-control"
                name="name"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="apellido" className="form-label">
                Apellido
              </label>
              <input
                className="form-control"
                name="apellido"
                value={usuario.apellido}
                onChange={handleChange}
              ></input>
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                value={usuario.email}
                onChange={handleChange}
                className="form-control"
                name="email"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="telefono" className="form-label">
                telefono
              </label>
              <input
                type="number"
                value={usuario.telefono || ""}
                onChange={handleChange}
                className="form-control"
                name="telefono"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="rol" className="form-label">
                Rol
              </label>
              <input
                type="text"
                value={usuario.rol}
                onChange={handleChange}
                className="form-control"
                name="rol"
              />
            </div>
            <div className="mb-3">
              <Button variant="outline-success" type="submit">
                Editar usuario
              </Button>
            </div>
          </form>
        </Col>
      </Row>
    </Container>
    
    
    </>
  )
}

export default FormUpdateUser