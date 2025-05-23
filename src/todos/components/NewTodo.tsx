'use client';

import { useState } from "react";
import { IoTrashOutline } from "react-icons/io5";

export const NewTodo = () => { 

    const [description, setDescription] = useState('')

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        
        e.preventDefault()
        setDescription('')

        console.log(`Dato enviado: ${description}`)
    }
    
  return (
    <form onSubmit={ onSubmit }  className='flex w-full'>
      <input type="text"
        value={description}
        onChange={ (e) => setDescription(e.target.value) }
        className="w-6/12 -ml-10 pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-sky-500 transition-all"
        placeholder="¿Qué necesita ser hecho?" />

      <button type='submit' className="flex items-center justify-center ml-2 bg-sky-500 p-2 text-white hover:bg-sky-700 transition-all rounded-xl">
        Crear
      </button>
      
      <span className='flex flex-1'></span>

      <button 
        //TODO: onClick={ () => deleteCompleted() }
        type='button' className="flex items-center justify-center rounded-xl ml-2 bg-red-400 p-2 text-white hover:bg-red-700 transition-all">
        <IoTrashOutline />
        Delete
      </button>


    </form>
  )
}