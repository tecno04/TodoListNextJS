'use client'

import { Todo } from '@/generated/prisma'
import React from 'react'
import TodoItem from './TodoItem'
import { NewTodo } from './NewTodo';
import { onToggleTodo } from '../actions/actions.todos';

interface Props {
    todos?: Todo[]
}

const TodosGrid = ({ todos = [] }: Props) => {

    return (

        <>
            <div className='px-10 py-5 w-full'>
                <NewTodo />
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>

                {
                    todos.map((todo) => (
                        <TodoItem key={todo.id} todos={todo} toggleUpdate={ onToggleTodo } />
                    ))
                }
            </div>

        </>
    )
}

export default TodosGrid
