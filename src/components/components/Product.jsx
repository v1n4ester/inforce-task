import React, { useState } from "react"
import { connect } from "react-redux";
import PortalModal from "./PortalModal";
import { removeProduct } from "./Redux/appReducer"


const Product = (props) => {
    const [openp, setOpenP] = useState(false);

    const removeGood=()=>{
        props.removeProduct(props.product.id)
    }

    return <div>
        <img className="product_img" src={props.product.imageUrl} />
        <p>{props.product.name}</p>
        <p>count: {props.product.count}</p>
        <p>product weight: {props.product.weight}</p>
        <div className="product_remove-button">
            <button onClick={() => setOpenP(true)} >Edit</button>
            <button onClick={removeGood}>Remove</button>
        </div>


        <PortalModal
            isOpen={openp}
            onClose={() => setOpenP(false)}
            good={props.product}
        />
    </div>
}

const mapStateToProps=(state)=>({})

export default connect(mapStateToProps, {removeProduct})(Product)