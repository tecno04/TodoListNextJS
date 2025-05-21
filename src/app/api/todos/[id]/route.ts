import prisma from '@/app/lib/prisma'
import { NextResponse, NextRequest } from 'next/server'

interface Segments {

    params: {
        id: string
    }

}

export async function GET(request: Request, { params }: Segments) {

    //const id = params.id
    const id = request.url.split('/').at(-1) //otra forma de obtener el ID de la URL

    const todo_searching = await prisma.todo.findFirst({
        where: {
            id
        }
    })

    if(!todo_searching) return NextResponse.json({ message: "No se encontró todo" }, { status: 404 })

    return NextResponse.json(todo_searching)

}