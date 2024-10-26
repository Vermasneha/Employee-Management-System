import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/Employee.Dashboard'
import AdminDashboard from './components/Dashboard/Admin.Dashboard'
import { getLocalStroage, setLocalStroage } from './utils/LocalStrorage'
import { AuthContext } from './context/AuthProvider'

const App = () => {

  useEffect(()=>{
    setLocalStroage()
    getLocalStroage()
  },)
  
  const [user, setUser]= useState(null)
  const authData = useContext(AuthContext)
  // console.log(authData)

  const handleLogin= (email, password)=>{
    if(email == 'admin@example.com' && password == '123'){
      setUser('admin')
    }else if(authData && authData.employees.find( (e) => email == e.email && password == e.password )){
      setUser('employee')
    }else{
      alert("Invalid Credentials")
    }
  }

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} />: ''}
      {user == 'admin' ? <AdminDashboard/> : <EmployeeDashboard/>}
    </>
  )
}

export default App