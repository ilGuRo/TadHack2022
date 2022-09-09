import React, { useEffect, useState } from "react";
import Usuario from "./Usuario";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';


const Usuarios = () => {
  const [usuarios, setUsuario] = useState([]);

  useEffect(() => {
    obtenerDatos();
  }, []);

  const url = "http://localhost:8000/api/v1/users";
  const obtenerDatos = async () => {
    const response = await fetch(url);
    const users = await response.json();
    console.log(users);
    setUsuario(users);
  };

  return (
    <div className="container">
      <h1>Usuarios</h1>
      {usuarios.map((usuario) => {
        return(
          <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt= {usuario.nombres} src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <Usuario usuario={usuario} />
          </ListItem>
          <Divider variant="inset" component="li" />
        </List>
        )
        
      })}
    </div>
  );
};

export default Usuarios;
