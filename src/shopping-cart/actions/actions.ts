import { getCookie, hasCookie, setCookie } from "cookies-next"

export const getCookieCart = (): { [id: string]: number } => {

    if (hasCookie('cart')) {
        const cookieCart = JSON.parse(getCookie('cart') as string || '{}')
        return cookieCart
    }

    return {}

}

export const addProductCart = (id: string) => {

    const cookieCart = getCookieCart()

    if(cookieCart[id]){
        cookieCart[id] += 1
    }else{
        cookieCart[id] = 1
    }

    setCookie('cart', JSON.stringify(cookieCart))
}

export const deleteProductCart = (id: string) => {

    //guardamos en una variable la obtencion de la cookie del carrito
    const cookieCart = getCookieCart()

    //SI, sobre el id recibido, hay info en la cookie del carrito
    if (cookieCart[id]) {
        //borramos toda info sobre el id recibido
        delete cookieCart[id]
    }

    //volvemos a setear en la cookie, la informacion actual post borrado
    setCookie('cart', JSON.stringify(cookieCart))

}

export const removeSingleItemFromCart = (id: string) => {

    const cookieCart = getCookieCart()

    if(cookieCart[id]){
        cookieCart[id] -= 1
    }

    if(cookieCart[id] <= 0){
        delete cookieCart[id]
    }

    setCookie('cart', JSON.stringify(cookieCart))
}