import React from 'react'

const AcceptTask = () => {
  return (
    <div className='flex-shrink-0 h-full w-[300px] p-5 bg-yellow-400 rounded-xl '>
        <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>
                High
            </h3>
            <h4 className='text-sm'>
                Deadline: 20 Feb 2024
            </h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'> 
            Make a Report on Company Profit-Sales Margin
        </h2>
        <p className='text-sm mt-2'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus doloremque mollitia nobis consectetur, fugiat magnam. 
        </p>
        <div className='flex justify-between mt-4'>
            <button className='bg-green-600 px-2 py-1 text-sm'>
            Mark as Completed
            </button>
            <button className='bg-red-600 px-2 py-1 text-sm'>
            Mark as Failed
            </button>
        </div>
    </div>
  )
}

export default AcceptTask
