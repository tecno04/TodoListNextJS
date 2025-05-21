//importamos los metodos y funciones de next
import { NextResponse } from 'next/server'

//exportamos una funcion que es para utilizar el GET, que recibimos el request (solicitud) del tipo "Request"
export async function GET(request: Request) {

    //retornamos con "NextResponse" y devolvemos con json() un objeto con la respuesta
    return NextResponse.json({ greeting: "Hello from NextJS!" })

}