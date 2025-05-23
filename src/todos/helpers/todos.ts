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