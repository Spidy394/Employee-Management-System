import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { setLocalStorage, getLocalStorage } from "./utils/LocalStorage";
import { AuthContext } from "./context/AuthProvider";

const App = () => {

  const [user, setUser] = useState(null);
  const authData = useContext(AuthContext)

  const handleLogin = (email, password) => {
    const { employees, admin } = getLocalStorage();
    if(email === 'admin@example.com' && password === '123'){
      setUser('admin')
    } else if (employees.find(e => 
      e.email === email && e.password === password
    )){
      setUser('employee')
    } else {
      alert('Invalid credentials')
    }
  }

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} />:null}
      {user === 'admin' ? <AdminDashboard />: <EmployeeDashboard />}
    </>
  );
};

export default App;
