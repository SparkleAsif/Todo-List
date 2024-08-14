import React from 'react'
import tick from '../assets/tick.webp'
import blank from '../assets/blank.webp'
import bin from '../assets/delete.png'

function NoteItems({text,id, isComplete, deleteTodo, toggle}) {


  return (
    <div  className='flex my-2 mx-4 gap-2 border rounded-3xl bg-sky-50' >
        <div className='flex flex-row p-3 w-[100%] justify-center cursor-pointer' >
            <img onClick={()=>{toggle(id)}} className='h-6 w-6' 
            src={isComplete? tick : blank } alt="" />

            <p className={`w-[95%] ml-2 text-slate-700 text-xl text-decoration-slate-500 ${isComplete?"line-through": ""}`} >{text}</p>
            <img onClick={()=>{deleteTodo(id)}} className='h-6 w-6 items-right mr-2' src={bin} alt="" />
        </div>
    </div>
  )
}

export default NoteItems