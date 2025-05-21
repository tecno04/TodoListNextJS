//rag - genera una funcion GET de forma rapida

import prisma from '@/app/lib/prisma'
import { NextResponse, NextRequest } from 'next/server'

export async function GET(request: Request) { 

    //borramos todo lo que haya cargado en "todo"
    await prisma.todo.deleteMany()

    const todo = await prisma.todo.createMany({
        data: [
            { description: "Piedra del Alma", complete: true },
            { description: "Piedra del Tiempo" },
            { description: "Piedra del Poder" },
            { description: "Piedra del Infinito" },
            { description: "Piedra de la Mente" },
        ]
    })

    return NextResponse.json({message: "Seed Execution Succesfully"})

}