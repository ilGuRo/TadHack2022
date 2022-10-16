import React from 'react'
import { Link } from 'react-router-dom'


function NavbarLogged() {
  return (
     <nav className="navbar navbar-expand-lg" style={{backgroundColor: "#b7056f"}}>
       <div className="container-fluid">
          <Link className="navbar-brand" to="/" style={{color: '#fff'}}>Mental helper</Link>
         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
           <span className="navbar-toggler-icon"></span>
         </button>
         <div className="collapse navbar-collapse" id="navbarNav">
           <ul className="navbar-nav">
             <li className="nav-item">
                <Link className="nav-link" to="/main" style={{color: '#fff'}}></Link>
             </li>
             <li className="nav-item">
                <Link className="nav-link" to="/main" style={{color: '#fff'}}>Profile</Link>
             </li>
           </ul>
         </div>
       </div>
     </nav>
  )
}

export default NavbarLogged