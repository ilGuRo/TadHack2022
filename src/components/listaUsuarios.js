import React, { useEffect, useState, useContext } from "react";
import {useNavigate} from 'react-router-dom'
import UserContext from "../context/User/UserContext";

const Usuarios = () => {

  const {users, getUsers, getSelectedUsers } = useContext(UserContext)

  useEffect(() => {
     getUsers();
     console.log(users);
  }, []);


  const navigate = useNavigate();
  const ruta = async(user) => {
    await console.log(user);
    navigate(`/ahorro-usuario`)
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
          {users.map((usuario) => {
            return (
            <tr key={usuario.id} onClick={() =>{ruta(getSelectedUsers(usuario))}} >
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
