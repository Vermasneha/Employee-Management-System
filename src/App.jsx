import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/Employee.Dashboard'
import AdminDashboard from './components/Dashboard/Admin.Dashboard'
import { getLocalStroage, setLocalStroage } from './utils/LocalStrorage'
import { AuthContext } from './context/AuthProvider'

// Tasks:- 1) task list counter dynamic redering

const App = () => {
  const [user, setUser]= useState(null)
  const[loggedInUserData, setLoggedInUserData]= useState(null)
  
  const [userData, setUserData] = useContext(AuthContext)
  // console.log(authData)

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser')
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUserData(userData.data)
    } else {
      // Only set local storage if there is no logged-in user
      setLocalStroage()
    }
  }, [])

  const handleLogin= (email, password)=>{
    if(email == 'admin@example.com' && password == '123'){
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({role:'admin'}))
    }else if(userData){
      const employee = userData.find( (e) => email == e.email && password == e.password )
      if(employee){
        setUser('employee')
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({role:'employee', data: employee}))
      }
    }else{
      alert("Invalid Credentials")
    }
  }

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} />: ''}
      {user == 'admin' ? <AdminDashboard changeUser={setUser} /> : ( user == 'employee' ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData} /> : null)}
    </>
  )
}

export default App