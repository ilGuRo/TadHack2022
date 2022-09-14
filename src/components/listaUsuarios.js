import React, { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom'
import UserSavings from "../pages/UserSavings";

const Usuarios = () => {
  const [usuarios, setUsuario] = useState([]);

  useEffect(() => {
    obtenerDatos();
  }, []);

  const url = "http://localhost:3001/users";
  const obtenerDatos = async () => {
    const response = await fetch(url);
    const users = await response.json();
    console.log(users);
    setUsuario(users);
  };


  const navigate = useNavigate();
  const ruta = (user) => {
    //UserSavings(user)
    navigate(`/ahorro-usuario`)
    console.log(user);
  }

  return (
    <div className="container">
      <h1 className="text-center">Asociados</h1>
      <table className="table table-hover ">
        <thead>
          <tr>
            <th scope="col">Documento </th>
            <th scope="col">Nombres </th>
            <th scope="col">Apellidos </th>
            <th scope="col">Email </th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario) => {
            return (
            <tr key={usuario.id} onClick={() =>{ruta(usuario)}} >
              <th scope="row">{usuario.documento} </th>
              <td>{usuario.nombres} </td>
              <td>{usuario.apellidos} </td>
              <td>{usuario.email} </td>
            </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Usuarios;