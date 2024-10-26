import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import FailedTask from './FailedTask'
import CompleteTak from './CompleteTak'

const TaskList = ({data}) => {
  return (
    <div id='tasklist' className='h-[65%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-5 mt-10'>
      {data.tasks.map((elem, idx)=>{
        if(elem.active){
          return <AcceptTask key={idx}/>
        }
        if(elem.completed){
          return <CompleteTak key={idx}/>
        }
        if(elem.failed){
          return <FailedTask key={idx}/>
        }
        if(elem.newTask){
          return <NewTask key={idx}/>
        }
      })}
    </div>
  )
}

export default TaskList
