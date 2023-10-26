import { useEffect, useState } from 'react'
import { Product } from './Product.jsx'



export function List(){
    const [listArticles, setListArticles] = useState([])
    useEffect(() =>{
        fetch('https://api.npoint.io/68bf5db20a3c236f68ed')
        .then((res)=>res.json())
        .then(data => setListArticles(data))
        console.log(listArticles)
    }, [])

        
 
    

    return (
        <section className='row'>
             <h1 className='border border-dark p-3 shadow-lg p-3 mb-5 bg-body-tertiary rounded'>Liste des Produits</h1>
            {listArticles.map((product, index)=>
            <div className='col-6'>
            <Product key={index} product={product}/>
            </div>
            )}
        </section>
        
    )
}

