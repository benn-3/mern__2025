import { Link } from "react-router-dom"
import "../../Css/Navbar.css"
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
                        <div   onClick={(toggleDropDown)} onLeave={(toggleDropDown)}>Hooks</div>
                        {dropdown &&(
                            <ul className="dropdown-menu">
                                <li><Link to="/usestate" className="link">UseState</Link></li>
                                <li><Link to="/useeffect" className="link">UseEffect</Link></li>
                                <li><Link to="/useeffectapi" className="link">UseEffectAPI</Link></li>
                                <li><Link to="/useref" className="link">UseRef</Link></li>
                                <li><Link to="/usereducer" className="link">UseReducer</Link></li>
                                <li><Link to="/usememo" className="link">UseMemo</Link></li>
                                <li><Link to="/callback" className="link">UseCallback</Link></li>
                                <li><Link to='/reactlifecycle' className="link">ReactLifecycleMethods</Link></li>
                                <li><Link to='/student'className="link" >Student</Link></li>
                                <li><Link to='/usecustom'className="link" >UseLocalStorage</Link></li>
                                                         


                            </ul>)}
                    </div>
                    <div className="dropdown">
           <div onClick={toggleDropDown} onLeave={toggleDropDown} className="link">Memoization</div>
            {dropdown && (
              <ul className="dropdown-menu">
                <li><Link to="/memo" className="link">Memo</Link></li>
                <li><Link to="/lazy" className="link">LazyLoading</Link></li>
              </ul>
            )}
            </div>
                 <li><Link to='/Signup' className="link">Signup</Link></li>
                 <li><Link to='/Login' className="link">Login</Link></li>
             </ol>
         </nav>
     </header>
    ) 
 }
 export default Navbar