import { useContext } from "react";
import { ProductosContext } from "../../context/ProductsContext";
import { Card, Button } from "react-bootstrap";

const CardProducts = () => {
  const { productos } = useContext(ProductosContext);

  console.log(productos, "productos de card")
  return (
    <>
      <div className="mx-2 d-flex flex-row">
        {productos === undefined
          ? "No hay productos en la tienda"
          : productos.map((producto) => (
              <>
                <Card key={producto._id} style={{ width: "18rem" }}>
                  {/* <Card.Img variant="top" src={producto.img} /> */}
                  <Card.Body>
                    <Card.Title>{producto.nombre}</Card.Title>
                    <Card.Text>{producto.direccion}</Card.Text>
                    <Card.Text>capacidad: {producto.capacidad}</Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </>
            ))}
      </div>
    </>
  );
};

export default CardProducts;
