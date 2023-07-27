import TableProducts from "../../components/products/TableProducts";
import TableUsers from "../../components/users/TableUsers";

const Administracion = () => {
  return (
    <div>
      <h3>Administracion</h3>
      <TableProducts />
      <h3>Usuarios</h3>
      <TableUsers />
    </div>
  );
};

export default Administracion;
