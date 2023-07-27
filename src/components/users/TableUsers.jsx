import { useState, useContext } from "react";
import { Table, Button, Modal } from "react-bootstrap";
import { UsuariosContext } from "../../context/UserContext";
import FormUpdateUser from "./FormUpdateUser";

const TableUsers = () => {
  const [show, setShow] = useState(false);
  const [editUser, setEditUser] = useState(null);

  const { usuarios, deleteUsuario } = useContext(UsuariosContext);

  const handleClose = () => setShow(false);

  const handleDelete = (id) => {
    console.log(id);
    deleteUsuario(id);
  };

  const handleEdit = (usuario) => {
    setEditUser(usuario);
    setShow(true);
  };

  return (
    <>
      <Table responsive>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Email</th>
            <th>Telefono</th>
            <th>Rol</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {usuarios === "undefined"
            ? "No hay usuarios"
            : usuarios.map((usuario) => (
                <>
                  <tr>
                    <td>{usuario.nombre}</td>
                    <td>{usuario.apellido}</td>
                    <td>{usuario.email}</td>
                    <td>{usuario.telefono}</td>
                    <td>{usuario.rol}</td>
                    <td>
                      <Button
                        variant="warning"
                        className="m-1"
                        onClick={() => handleEdit(usuario)}
                      >
                        Editar
                      </Button>
                      <Button
                        variant="danger"
                        className="m-1"
                        onClick={() => handleDelete(usuario._id)}
                      >
                        Eliminar
                      </Button>
                    </td>
                  </tr>
                </>
              ))}
        </tbody>
      </Table>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Usuario</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormUpdateUser editUser={editUser} handleClose={handleClose} />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default TableUsers;
