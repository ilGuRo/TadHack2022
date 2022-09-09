import PersonIcon from '@mui/icons-material/Person';
import Avatar from '@mui/material/Avatar';

function Usuario({usuario}) {
    return (
        <>
        <div>
            <p>
                {usuario.nombres} {usuario.apellidos} 
                <br />
                {usuario.email} 
            </p>
        </div>
        </>
      );
}

export default Usuario