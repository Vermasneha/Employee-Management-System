import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/Employee.Dashboard'
import AdminDashboard from './components/Dashboard/Admin.Dashboard'
import { getLocalStroage, setLocalStroage } from './utils/LocalStrorage'
import { AuthContext } from './context/AuthProvider'

const App = () => {

  useEffect(()=>{
    localStorage.clear()
    setLocalStroage()
  },)
  
  const [user, setUser]= useState(null)
  const[loggedInUserData, setLoggedInUserData]= useState(null)
  const authData = useContext(AuthContext)
  // console.log(authData)

  // useEffect(()=>{
  //   if(authData){
  //     const loggedInUser = localStorage.getItem("loggedInUser")
  //     if(loggedInUser){
  //       setUser(loggedInUser.role)
  //     }
  //   }
  // },[authData])

  const handleLogin= (email, password)=>{
    if(email == 'admin@example.com' && password == '123'){
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({role:'admin'}))
    }else if(authData){
      const employee = authData.employees.find( (e) => email == e.email && password == e.password )
      if(employee){
        setUser('employee')
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({role:'employee'}))
      }
    }else{
      alert("Invalid Credentials")
    }
  }

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} />: ''}
      {user == 'admin' ? <AdminDashboard/> : ( user == 'employee' ? <EmployeeDashboard data={loggedInUserData} /> : null)}
    </>
  )
}

export default App