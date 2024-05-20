import axios from "axios";
import React, { useEffect,useState} from "react";
import { useParams } from "react-router-dom";
function CountryDetails(){
    var {cname}=useParams()
        
    var [details,setDetails]=React.useState(null)
   useEffect(()=>{
    axios.get(`https://restcountries.com/v3/name/${cname}`).then((res)=>setDetails({...res.data[0]}))
    console.log(details)

   },[])
    return(
        <div align="center"className="border border-2 border-info bg-success">
          
           <img src={details?.flags[1]} alt=""  />
           <h2> CountryDetails {JSON.stringify(details?.name?.common)}</h2>
            <h3>capital {JSON.stringify(details?.capital[0])}</h3>
            <h3>population {JSON.stringify(details?.population)}</h3>
            <h3>Timezones {JSON.stringify(details?.timezones)}</h3>
            <h3>continents {JSON.stringify(details?.continents)}</h3>

        </div>
    )
}
export default CountryDetails