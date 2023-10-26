import { useState } from 'react'

export function  Quantity(){
    const [quantities, setQuantity] = useState(0)
    const negatifQuantity = () => {
        if (quantities > 0){
            setQuantity(quantities - 1)
        }
    }

    return (
        <>
        <button onClick={negatifQuantity}> - </button>
        <span>{quantities}</span>
        <button onClick={() => setQuantity(quantities + 1)}> + </button>
        </>    
    )
}