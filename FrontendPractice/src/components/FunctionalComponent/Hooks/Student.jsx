import Invigilator from "../ContextComponent/Invigilator"

const Student =()=>
{
return(
    <div>
        <h2>This Hook is alternative for props drilling</h2>
        <h4>Students are writing their exam</h4>
        <Invigilator sgpa="9.5" cgpa="6.5"/>
    </div>
    
    
)
}
 export default Student