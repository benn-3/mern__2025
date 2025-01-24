import { useMemo, useState } from "react";

var slowFunction=(num)=>
{
    for(var slow=0;slow<10;slow++)
   {}
    return num*2
}
const UseMemo=()=>
{
    var [num,setNum]=useState(0);
    var [dark,setDark]=useState(false)
     var styling={
        backgroundColor:dark?"black":"white",
        color:dark?"white":"black"
     }
var doublingUpANumber=useMemo(()=>{
return slowFunction(num)
},[num])

    return(
<div style={styling}>
    <h2>  this page is usememo example</h2>
    <input type="number" value={num} onChange={(e)=>setNum(e.target.value)}  />
    <button  className="l"onClick={()=>setDark(curTheme=>!curTheme)}>ToggleTheme</button>
    <h1 >the num is {doublingUpANumber}</h1>
   
</div>

    )
}
export default UseMemo;