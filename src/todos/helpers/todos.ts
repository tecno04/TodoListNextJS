import { Todo } from "@/generated/prisma";

export const updateStatusTodo = async (id:string, complete: boolean):Promise<Todo> => {

    const todo = await fetch(`/api/todos/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ complete }),
    })
    .then((res) => res.json())
    .catch(error => error.json())

    return todo

}

export const createTodo = async(description: string):Promise<Todo> => {

    const newTodo = await fetch('/api/todos', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ description }),
    })
    .then((res) => res.json())
    .catch(error => error.json())

    return newTodo
}

export const deleteTodo = async ():Promise<Todo> => {

    const deleteTodoComplete = await fetch('/api/todos', {
        method: "DELETE"
    })
    .then((res) => res.json())
    .catch(error => error.json())

    return deleteTodoComplete
}