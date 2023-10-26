
import { Quantity } from './Quantity.jsx'

export function Product({product}){
    return (
        <>
            <div className="card col-3 m-5 shadow-lg p-3 mb-5 bg-body-tertiary rounded" style={{width:"18rem"}}>
                <h4 className="card-title text-muted">{product.nom}</h4>
                <h4 className="card-title">{product.prix} euros</h4>
                <img src={product.image} alt="" />
            <div className="card-body">
            <h4 className="card-title">{product.categorie.nom}</h4>
            <Quantity />
            </div>
            </div>
        </>    
    )
}