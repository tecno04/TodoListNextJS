import prisma from '@/app/lib/prisma'
import { NextResponse } from 'next/server'
import * as yup from 'yup'

const postSchema = yup.object({
    description: yup.string().required(),
    complete: yup.boolean().optional().default(false)
})

export async function GET(request: Request) {

    const { searchParams } = new URL(request.url)
    const take = Number(searchParams.get('take') ?? '10')
    const skip = Number(searchParams.get('skip') ?? '0')

    const todos = await prisma.todo.findMany({ take: take, skip: skip })

    return NextResponse.json(todos)
}

export async function POST(request: Request) {

    try {

        const body = await postSchema.validate( await request.json() )

        const newTodo = await prisma.todo.create({ data: body })

        return NextResponse.json(newTodo)

    } catch (error) {

        return NextResponse.json( error , { status: 400 } )
    }

}