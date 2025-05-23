'use client'

import { Todo } from '@/generated/prisma'
import React from 'react'
import TodoItem from './TodoItem'
import * as api from "../helpers/todos";
import { useRouter } from 'next/navigation';
import { NewTodo } from './NewTodo';

interface Props {
    todos?: Todo[]
}

const TodosGrid = ({ todos = [] }: Props) => {

    const router = useRouter()

    const toggleTodo = async (id: string, complete: boolean): Promise<Todo> => {

        const updateTodo = await api.updateStatusTodo(id, complete)
        router.refresh()
        return updateTodo
    }

    return (

        <>
            <div className='px-10 py-5 w-full'>
                <NewTodo />
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>

                {
                    todos.map((todo) => (
                        <TodoItem key={todo.id} todos={todo} toggleUpdate={toggleTodo} />
                    ))
                }
            </div>

        </>
    )
}

export default TodosGrid
