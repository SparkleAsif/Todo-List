import React, { useEffect, useRef, useState } from 'react'
import todoIcon from '../assets/todo.png'
import NoteItems from './NoteItems'

const Todo = () => {
    const [todo, setTodo]=useState([]);

    const inputRef = useRef();
    
    const addText=()=>{
        const inputText = inputRef.current.value.trim();

        if(inputText ===""){
            return null;
        }


        const newTodo ={
            id:Date.now(),
            text: inputText,
            isComplete:false,
        }
        setTodo((prev)=>[...prev, newTodo]);
        inputRef.current.value = ""; //to clear the input field
    }

    const deleteTodo =(id)=>{
        setTodo((prevTodo)=>{
          return  prevTodo.filter((singleTodo)=>singleTodo.id!==id)
        })
    }
    const toggle =(id)=>{
        setTodo((prevTodos)=>{
            return prevTodos.map((singleTodo)=>{
                if(singleTodo.id ===id){
                    return {...singleTodo, isComplete: !singleTodo.isComplete}
                }
                return singleTodo;
            })
        })
    }
    useEffect(()=>{
        console.log(todo)
    },[todo])
  return (
    <div className='bg-white  place-self-center w-[30%]  flex flex-col p-7 min-h-[600px] rounded-xl'>
        <div className='flex items-center mx-5 mt-7 p-5 flex-row justify-center bg-orange-50'>
        <h1 className='flex text-4xl font-semibold' >TO 
            <span>
                <p className='text-orange-500' >D</p>
            </span>    
        </h1>
        <img src={todoIcon} className=' text-orange-800 w-8 items-center justify-center mt-1' />
        </div>    
        <div className='flex items-center justify-start ml-5 mt-5 '>
            <input ref={inputRef} className='border rounded-l-3xl py-2 px-3 w-[82%]' type="text" placeholder='Add your Task' />
            <button className='border rounded-r-3xl font-semibold  py-2 px-3 w-[15%] bg-sky-300'
                onClick={addText} >ADD</button>
        </div>
        {todo.map((item, index)=>{
            return <NoteItems key={index} text={item.text} id={item.id}
            isComplete={item.isComplete} deleteTodo={deleteTodo} toggle={toggle}></NoteItems>
        })}
        
    </div>
  )
}

export default Todo