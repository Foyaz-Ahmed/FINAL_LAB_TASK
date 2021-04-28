import React from 'react'
import {Link} from 'react-router-dom'


const Navbar = () => {
    return (
        <div>
            <Link to='/'>Home</Link> ||
            <Link to='/create'>Create</Link> ||
            <Link to='/list'>List</Link>
            
            <hr/>
        </div>
    )
}

export default Navbar
