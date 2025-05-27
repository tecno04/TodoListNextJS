'use server'

import prisma from "@/app/lib/prisma"
import { Todo } from "@/generated/prisma"
import { revalidatePath } from "next/cache"

export const onToggleTodo = async (id: string, complete:boolean): Promise<Todo> => {

    try {

        const todo = await prisma.todo.findFirst({ where: { id } })

        if (!todo) throw "No se encontró el Todo"

        try {

            const updated = await prisma.todo.update({
                where: { id },
                data: { complete }
            })

            revalidatePath('/dashboard/server-actions')
            return updated

        } catch (error) {
            throw "NO se pudo actualizar el Todo"
        }

    } catch (error) {
        throw "Ocurrio un problema al actualizar el Todo"
    }
}

export const onCreateTodo = async (description: string) => {

    try {
        const newTodo = await prisma.todo.create({ data: { description, complete: false } })
        revalidatePath('/dashboard/server-actions')
        return newTodo
    } catch (error) {
        return 'Ocurrio un problema al crear el nuevo Todo'
    }

}

export const onDeleteTodo = async () => {

    try {
        const deleteTodoComplete = await prisma.todo.deleteMany({
            where: {
                complete: true
            }
        })
        revalidatePath('/dashboard/server-actions')
        return "Todo eliminado correctamente"
    } catch (error) {
        return 'Ocurrio un problema al eliminar el nuevo Todo'
    }

}