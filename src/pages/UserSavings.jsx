import React, { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom'

const UserSavings = (props) => {
  const [usuarios, setUsuario] = useState([]);

  useEffect(() => {
    obtenerDatos();
  }, []);

  const url = "http://localhost:3001/savings/1" 
  const obtenerDatos = async () => {
    const response = await fetch(url);
    const users = await response.json();
    console.log(users);
    setUsuario(users);
  };



  const navigate = useNavigate();
  const ruta = (id) => {
    navigate(`/${id}`)
    console.log(id);
  }

  return (
    <div className="container">
      <h1 className="text-center">Abono ahorro mensual</h1>
      <table className="table table-hover ">
        <thead>
          <tr>
            <th scope="col">Valor pago </th>
            <th scope="col">Mes abonado </th>
            <th scope="col">Fecha pago </th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario) => {
            return (
            <tr key={usuario.id} onClick={() =>{ruta(usuario.id)}} >
              <th scope="row">{usuario.valor_pago} </th>
              <td>{usuario.mes_abonado} </td>
              <td>{usuario.fecha_pago} </td>
              <td>{usuario.email} </td>
            </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UserSavings;
