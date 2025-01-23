import { Link } from "react-router-dom"
import "../../CSS/Navbar.css"
import {useState} from "react"
const Navbar=()=>{
    var [dropdown,showDropdown]=useState(false)
    const toggleDropDown=()=>{
        showDropdown((dropdown)=>!dropdown)
    }
    return(
     <header>
         <nav>
             <ol>
                 <li><Link to='/Home' className="link">Home</Link></li>
                 <li><Link to='/About' className="link">About</Link></li>
                 <li><Link to='/Gallery' className="link">Gallery</Link></li>
                 <li><Link to='/Contact' className="link">Contact</Link></li>
                 <div className="dropdown">
                        <div  className="link" onClick={(toggleDropDown)} onLeave={(toggleDropDown)}>Hooks</div>
                        {dropdown &&(
                            <ul className="dropdown-menu">
                                <li><Link to="/usestate" >UseState</Link></li>
                                <li><Link to="/useeffect">UseEffect</Link></li>
                                <li><Link to="/useeffectapi">UseEffectAPI</Link></li>
                                <li><Link to="/useref">UseRef</Link></li>
                                <li><Link to="/usereducer">UseReducer</Link></li>
                                <li><Link to="/usememo">UseMemo</Link></li>
                                <li><Link to="/callback">UseCallback</Link></li>
                            </ul>)}
                    </div>
                 <li><Link to='/Signup' className="link">Signup</Link></li>
                 <li><Link to='/Login' className="link">Login</Link></li>
                 

             </ol>
         </nav>
     </header>
    ) 
 }
 export default Navbar