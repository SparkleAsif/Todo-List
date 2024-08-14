import React from 'react'
import Todo from './components/Todo'

const App = () => {
  return (
      <div>
        <h1 className='bg-gray-600 text-2xl text-white items-center justify-center mx-auto flex' >Here is your ToDo List</h1>
        <div className='bg-slate-900 grid py-4 min-h-screen ' >
          <Todo></Todo>
          
       </div>
      </div>
      
  )
}

export default App