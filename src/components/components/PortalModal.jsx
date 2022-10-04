import React, { useState } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import close from '../../assets/img/close.svg';
import { updateProduct } from "./Redux/appReducer";

const modal = document.getElementById("modal-container");

const PortalModal = (props) => {
    const [name, setName] = useState(props.good.name)
    const [count, setCount] = useState(props.good.count)
    const [weight, setWeight] = useState(props.good.weight)
    const [img, setImg] = useState(props.good.imageUrl)

    const changeProductLocal = (param) => (e) => {
        if (param === "name") {
            setName(e.currentTarget.value)
        } else if (param === "count") {
            setCount(e.currentTarget.value)
        } else if (param === "img") {
            if (e.target.files.length) {
                let fileReader = new FileReader();
                fileReader.onload = function (e) {
                    setImg(e.target.result)
                }
                fileReader.readAsDataURL(e.target.files[0])
            }
        } else {
            setWeight(e.currentTarget.value)
        }
    }

    const cancelHundle = () => {
        setName(props.good.name)
        setCount(props.good.count)
        setWeight(props.good.weight)
        setImg(props.good.imageUrl)
        props.onClose()
    }

    const changeProduct = () => {
        props.updateProduct(name, count, weight, img, props.good.id)
        props.onClose()
    }

    if (!props.isOpen) return null;
    return ReactDOM.createPortal(
        <div className="black-cover">
            <div className="portal_container">
                <img className="portal_close-button" src={close} onClick={cancelHundle} />
                <img className="portal_image" src={img} />
                <input type="file" onChange={changeProductLocal("img")} accept="image/png, image/gif, image/jpeg" />
                <p>Name:</p>
                <input className="portal_input" onChange={changeProductLocal("name")} type="text" value={name} />
                <p>Count:</p>
                <input className="portal_input" onChange={changeProductLocal("count")} type="text" value={count} />
                <p>Weight:</p>
                <input className="portal_input" onChange={changeProductLocal("weight")} type="text" value={weight} />
                <div className="portal_buttons-container">
                    <button onClick={changeProduct}>Save</button>
                    <button onClick={cancelHundle}>Cancel</button>
                </div>
            </div>
        </div>,
        modal
    );
};

const mapStateToProps = (state) => ({})

export default connect(mapStateToProps, { updateProduct })(PortalModal)