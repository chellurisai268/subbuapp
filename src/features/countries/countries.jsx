import React from "react";
import { useGetAllCountriesQuery } from "../../services/countriesApi";
function Countries(){
   var {isLoading,data}= useGetAllCountriesQuery()
//    console.log('isLoading::',isLoading)
//    console.log('data::',data)
    return (
        <div>
            <h1>countries</h1>
            {
                isLoading&&(<div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>)
            }
            <ul className="d-flex flex-wrap">
            {
                isLoading===false&&(
                    data.map((country)=>{
                        return <div className="border border-danger border-5 p-5 m-3 bg-secondary w-25" >
                            <li>Country:{country.name.common}</li>
                            <li><img src={country.flags[0]} alt=""width='200px' /></li>
                            <li>Border:{country.borders}</li>
                            <li>Capital:{country.capital}</li>

                        </div>
                    })
                )
            }
            </ul>
        </div>

    )
}
export default Countries