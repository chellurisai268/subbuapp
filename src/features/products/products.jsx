import React from "react";
import { useGetAllProductsQuery } from "../../services/productsApi";
function Products(){
    var {isLoading,data}= useGetAllProductsQuery()
    
    console.log('isLoading::',isLoading)
    console.log('data::',data)
    return (
        <div>
            <h1>Products</h1>
            {
                isLoading&&(<div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>)
            }
            <ul className="d-flex flex-wrap">
            {
            isLoading===false&&(
                data.map((p)=>{
                    return <li className="border border-info border-5 p-5 m-3 bg-secondary text-white w-25 h-25">
                        <img src={p.image} width="100px"/>
                        <p>CATEGORY:{p.category}</p>
                        <p>TITLE:{p.title}</p>
                        <p>PRICE:{p.price}</p>
                        <button className="bg-info">Add to Cart</button>
                        </li>
                   
                    
                })
            )
            }
            </ul>
        </div>
    )
}
export default Products