import React, { useEffect, useContext } from "react";
import {useNavigate} from 'react-router-dom'
import UserContext from "../context/User/UserContext";

const UserSavings = (props) => {

  const { userSavings, selectedUser } = useContext(UserContext)

  useEffect(() => {
    console.log(userSavings)
  }, []);


  return (
    <div className="container">
      
      <h1 className="text-center">Abono ahorro mensual</h1>
      <hr size="2px"/>
      <h3 className="text-center"> {selectedUser.nombres} {selectedUser.apellidos} </h3>
      <table className="table table-hover ">
        <thead>
          <tr>
            <th scope="col">Valor pago </th>
            <th scope="col">Mes abonado </th>
            <th scope="col">Fecha pago </th>
          </tr>
        </thead>
        <tbody>
          {userSavings.map((usuario) => {
            return (
            <tr key={usuario.id}>
              <th scope="row">{usuario.valor_pago} </th>
              <td>{usuario.mes_abonado} </td>
              <td>{usuario.fecha_pago} </td>
            </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UserSavings;
