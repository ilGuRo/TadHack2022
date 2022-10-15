import "./App.css";

import { Route, Routes } from "react-router-dom";
import Call from "./components/Call"
import { Profile } from './components/Profile.js'
import LoginButton from "./components/Login.js"
import {LogoutButton}  from "./components/Logout.js";
import Navbar from "./components/Navbar";
import UserState from "./context/User/UserState";

function App() {
  return (
    
    <UserState>
      <Navbar />
      <Routes>
        <Route path="/" element={<LoginButton />} />
        <Route path="/" element={<LogoutButton/>}/>
        <Route path="/call" element={<Call />} />
      </Routes>
    </UserState>
  
  );
}

export default App;
