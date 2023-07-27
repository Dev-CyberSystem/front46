import axios from "axios";
import { createContext, useEffect, useState } from "react";
import jwt_decode from "jwt-decode";

export const UsuariosContext = createContext(); //universo. Todo lo que este aqui adentro va a tener acceso a los usuarios

// eslint-disable-next-line react/prop-types
const UserContext = ({ children }) => {
  const [usuarios, setUsuarios] = useState([]);
  const [userLogueado, setUserLogueado] = useState({}); //para que no se borre el usuario logueado cuando se recarga la pagina

  const getUsuarios = async () => {
    try {
      const response = await axios.get("https://back44.vercel.app/api/user/usuarios");
      setUsuarios(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const login = async (email, password) => {
    console.log(email, password);
    const response = await axios.post(
      "https://back44.vercel.app/api/user/login",
      { email, password }
    );
    console.log(response.data.data.token);
    const jwtToken = response.data.data.token;
    const decode = jwt_decode(jwtToken);

    const usuario = {
      nombre: decode.nombre,
      apellido: decode.apellido,
      email: decode.email,
      rol: decode.rol,
    };

    localStorage.setItem("user", JSON.stringify(usuario));
    setUserLogueado(usuario);

    if (usuario.rol === "admin") {
      window.location.href = "/admin";
    } else {
      window.location.href = "/";
    }
  };

  const updateUsuarios = async (updateUsuario) => {
    console.log(updateUsuario, "usuario de context");
    try {
      await axios.put(
        `https://back44.vercel.app/api/user/usuarios/${updateUsuario._id}`,
        updateUsuario
      );
        await getUsuarios();        
    } catch (error) {
      console.log(error, "error de usuarios");
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  useEffect(() => {
    getUsuarios();
  }, []);

  return (
    <UsuariosContext.Provider
      value={{
        usuarios,
        setUsuarios,
        logout,
        login,
        userLogueado,
        updateUsuarios,
      }}
    >
      {children}
    </UsuariosContext.Provider>
  );
};

export default UserContext;
