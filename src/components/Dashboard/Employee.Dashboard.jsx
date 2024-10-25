import React from 'react'
import Header from '../others/Header'
import TaskListCounter from '../others/TaskListCounter'
import TaskList from '../Tasklist/TaskList'

const EmployeeDashboard = () => {
  return (
    <div className='p-20 bg-[#1C1C1C] h-screen'>
        <Header/>     
        <TaskListCounter/>
        <TaskList/>
    </div>
  )
}

export default EmployeeDashboard
