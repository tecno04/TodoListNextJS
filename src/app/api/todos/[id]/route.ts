import prisma from '@/app/lib/prisma'
import { Todo } from '@/generated/prisma'
import { NextResponse, NextRequest } from 'next/server'
import * as yup from 'yup'

const PutSchema = yup.object({
    description: yup.string().optional(),
    complete: yup.boolean().optional()
})

//se supone que es para optimizar codigo repetido, pero es bastante complicado -- preferemente mejor usar NestJS
const getTodo = async (id: string): Promise<Todo | null > => {

    const todo = await prisma.todo.findFirst({
        where: {
            id
        }
    })

    return todo

}

export async function GET(request: Request) {

    //const id = params.id
    const id = request.url.split('/').at(-1) //otra forma de obtener el ID de la URL

    const todo_searching = await prisma.todo.findFirst({
        where: {
            id
        }
    })

    if (!todo_searching) return NextResponse.json({ message: "No se encontró todo" }, { status: 404 })

    return NextResponse.json(todo_searching)

}

export async function PUT(request: Request) {

    try {

        const id = request.url.split('/').at(-1)
        const todo = await prisma.todo.findFirst({ where: { id } })

        if (!todo) return NextResponse.json({ message: "No se encontró todo" }, { status: 404 })

        try {

            const { description, complete } = await PutSchema.validate(await request.json())

            const updated = await prisma.todo.update({
                where: { id },
                data: { description, complete }
            })

            return NextResponse.json(updated)
        } catch (error) {
            return NextResponse.json(error, { status: 400 })
        }

    } catch (error) {

        return NextResponse.json(error, { status: 400 })
    }

}