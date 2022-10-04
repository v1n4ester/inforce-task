import React, { useState } from 'react'
import { connect } from 'react-redux'
import MainPortal from './MainPortal'
import Product from './Product'
import { getProductsList } from './Redux/appReducer'

const Main = (props) => {
    const [open, setOpen] = useState(false)
    const productList = props.products.map(p => <Product key={p.id} product={p}/>)
    return <div>
        <h1>Products List</h1>
        <div className='product_container'>{productList}</div>
        <div>
            <button onClick={()=>setOpen(true)}>Add Product</button>
        </div>
        
        <MainPortal
            isOpen={open}
            onClose={() => setOpen(false)}
        />
    </div>
}

const mapStateToProps = (state) => ({
    products: state.main.products
})

export default connect(mapStateToProps, {getProductsList})(Main)