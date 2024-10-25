import React, { useEffect } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/Employee.Dashboard'
import AdminDashboard from './components/Dashboard/Admin.Dashboard'
import { setLocalStroage } from './utils/LocalStrorage'

const App = () => {

  useEffect(()=>{
    // setLocalStroage()
    // getLocalStroage()
  },)
  
  return (
    // <Login/>
    // <EmployeeDashboard/>
    <AdminDashboard/>
  )
}

export default App