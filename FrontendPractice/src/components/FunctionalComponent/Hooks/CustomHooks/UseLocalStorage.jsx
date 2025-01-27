import useLocalStorage from "./SampleCustomHook"
const UseLocalStorage=()=>{
    var [text,setText]=useLocalStorage("Customer ID"," ")
    var [pass,setPass]=useLocalStorage("Password"," ")
    return(
        <div>
            <h2>Utilizing Custom Hook Created</h2>
            <input type="text" value={text} onChange={(e) =>setText(e.target.value)} />
            <input type="password" value={pass} onChange={(e) =>setPass(e.target.value)} />
            <h3>The text is {text}</h3>
        </div>
    )
}
export default UseLocalStorage