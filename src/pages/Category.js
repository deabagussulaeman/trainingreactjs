import React from 'react'
import { Link } from "react-router-dom";  

const Category = () => {
    return (
        <div>
            <h2>Halaman Kategori</h2>
            <div>
                <p>Klik untuk lihat ke halaman detail</p>

                <Link style={{margin: ' 24px'}} to="/category/detail/Beef">Beef</Link>
                <Link style={{margin: ' 24px'}} to="/category/detail/Seafood">Seafood</Link>
                <Link style={{margin: ' 24px'}} to="/category/detail/Chicken">Chicken</Link>
            </div>
        </div>
    )
}

export default Category