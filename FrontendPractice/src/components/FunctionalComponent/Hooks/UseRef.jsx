import { useEffect, useRef, useState } from "react"

const UseRef=()=>{
    var[text,setText]=useState("")
    var prevRender=useRef()
    useEffect(()=>
    {
        console.log(prevRender.current)
       prevRender.current=text
    },[text])

return(
    <div style={{textAlign:"center"}}>
        <h1>this is usereference Example</h1>
        <input type="text" value={text} onChange={(e)=>setText(e.target.value)} />
        <h4>The text is {text}</h4>
        <h5>the previous render is {prevRender.current}</h5>
    </div>
)
}
export default UseRef