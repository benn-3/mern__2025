import {useState} from 'react';
import {Link} from 'react-router-dom';
import'../../Css/Navbar.css';
const Navbar=()=>{
    var [dropdown,showDropdown]= useState(false)
    const toggleDropdown=()=>{
        showDropdown(dropdown=>!dropdown)
    }
    return(
        <header>
        <nav>
            <ol>
                <li><Link to='/' className='link'>Home</Link></li>
                <li><Link  to='/About' className='link'>About</Link></li>
                <li><Link to='/Gallery' className='link'>Gallery</Link></li>
                <li><Link to='/Contact' className='link'>Contact</Link></li>
                <div>
                    <span onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>Hooks</span>
                    {dropdown &&(
                        <ul>
                        <li><Link to='/useState' target='_blank'>useState</Link></li>
                        <li>useEffect</li>
                    </ul>
                    )}
                    
                </div>
                <li><Link to='/Signup' className='link'>Signup</Link></li>
                <li><Link to='/login' className='link'>Login</Link></li>

            </ol>
        </nav>
        </header>
    )
}
export default Navbar;