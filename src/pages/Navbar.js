import React from 'react'
import { Link } from "react-router-dom";  

const Navbar = () => {
    return (
        <div>
            <Link style={{margin: ' 24px'}} to="/">Home</Link>
            <Link style={{margin: ' 24px'}} to="/category">Kategori</Link>
            <hr />
        </div>
    )
}

export default Navbar