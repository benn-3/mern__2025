import { useState } from "react";
const ListItems=({func})=>{
    var [numbers,setNumbers]=useState([])
    useEffect(()=>{
        setNumbers(func())
        console.log(numbers)
    },[func])
return(
    <div>
        <h3>This number list is as follows according to the number present in input box</h3>
        {numbers.map((numbers,index)=>{
            return <h4 key={index}>{number}</h4>
        })}
    </div>
)
}
export default ListItems;