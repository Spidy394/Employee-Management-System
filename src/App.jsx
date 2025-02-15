import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { setLocalStoage } from "./utils/LocalStorage";
import { AuthContext } from "./context/AuthProvider";



const App = () => {

  const [user, setUser] = useState(null);

  const handleLogin = (email, password) => {
    if(email == 'admin@example.com' && password == '123'){
      setUser('admin')
    } else if (email == '' & password == '123'){
      setUser('employee')
    } else alert('Invalid credentials')
  }

  const data = useContext(AuthContext)

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} />:null}
      {user == 'admin' ? <AdminDashboard />: <EmployeeDashboard />}
    </>
  );
};

export default App;
