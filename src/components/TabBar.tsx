// https://tailwindcomponents.com/component/radio-buttons-1
'use client'
import { setCookie } from "cookies-next"
import { useState } from "react"

// Definimos las props que recibira el componente
interface Props {
    //currentTab es el tab seleccionado por defecto
    currentTab?: number
    // tabOptions es un array de numeros que representa las opciones de tabs
    tabOptions?: number[]
}

//en la definicion del componentm desestructuramos las props e inicializamos en caso de que no las recibamos
export const TabBar = ({ currentTab = 1, tabOptions = [1, 2, 3, 4] }: Props) => {

    //inicializamos el estado del tab seleccionado, con el valor recibido por props
    const [selected, setselected] = useState(currentTab)

    const onSelectedTab = (tab: number) => {
        setselected(tab)
        setCookie('selectedTab', tab.toString() )
    }

    return (
        <div className="grid w-full grid-cols-4 space-x-2 rounded-xl bg-gray-200 p-2 mt-10">
            {
                tabOptions.map((tab) => (
                    <div key={tab}>
                        <input
                            type="radio"
                            id={tab.toString()}
                            className="peer hidden"
                            // configuramos el "onChange" con un void para que no joda
                            onChange={() => { }}
                            //configuramos la prop "selected" para marcar el checked, que coincida exactamente con el tab actual recibido
                            checked={selected === tab}
                        />
                        <label
                            //configuramos el "onClick" para que cambie el estado del tab seleccionado
                            onClick={() => onSelectedTab(tab)}
                            className="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white"
                        >
                            {tab}
                        </label>
                    </div>
                ))
            }
        </div>
    )
}