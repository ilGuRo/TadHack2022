import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";
import { Route, Routes } from "react-router-dom";
import Call from "./components/Call"
import { Profile } from './components/Profile.js'
import LoginButton from "./components/Login.js"
import Navbar from "./components/Navbar";
import UserState from "./context/User/UserState";
import Main from "./pages/Main";
import AlternIndex from "./pages/AlternIndex"
import NavbarLogged from "./components/NavbarLogged"

function App() {
  const {isAuthenticated} = useAuth0();
  console.log(isAuthenticated) 
  return (
    
    <UserState>
      {isAuthenticated ? (
        <>
             <NavbarLogged/>
        </>
         
              )  : <Navbar/>}
      <Routes>
      <Route path="/" element={<AlternIndex />}/>   
        <Route path="/main" element={<Main/>}/>
        <Route path="/call" element={<Call />} />
        <Route path="/profile" element={<Profile />} />
        

      </Routes>
    </UserState>
  
  );
}

export default App;
