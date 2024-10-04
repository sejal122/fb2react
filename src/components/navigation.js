import React from 'react'
import { Link } from 'react-router-dom'
function Navigation() {
    return (
        <div>
            <h3>Welcome to ReactJS tutorial!</h3>
            <h5>Happy coding !</h5>
        <hr/>
            <div>
                <ul>
                    <li><Link to={'/state'}><button>Function component</button></Link> </li>
                    <li> <Link to={'/lists'}>Render List</Link></li>
                    <li><Link to={'/classcomp'}>Class component</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Navigation
