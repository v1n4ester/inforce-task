import React, { useState } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import close from '../../assets/img/close.svg';
import { addNewProduct } from "./Redux/appReducer";

const modal = document.getElementById("modal-container");

const MainPortal = (props) => {
    const defaultImg = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Flag_of_Unknow.svg/1024px-Flag_of_Unknow.svg.png"

    const [img, setImg] = useState(defaultImg);
    const [name, setName] = useState("");
    const [count, setCount] = useState("");
    const [weight, setWeight] = useState("");

    const changeProductLocal=(param)=>(e)=>{
        if(param === "name"){
            setName(e.currentTarget.value)
        }else if(param === "count"){
            setCount(e.currentTarget.value)
        }else if(param === "img"){
            if (e.target.files.length) {
                let fileReader = new FileReader();
                fileReader.onload = function(e){
                    setImg(e.target.result)
                }
                fileReader.readAsDataURL(e.target.files[0])
            }
        }else{
            setWeight(e.currentTarget.value)
        }
    }

    const addNewProductHundle=()=>{
        props.addNewProduct(name, img, count, weight)
        cancelHundle()
    }

    const cancelHundle = () =>{
        setName("")
        setCount("")
        setWeight("")
        setImg(defaultImg)
        props.onClose()
    }

    if (!props.isOpen) return null;
    return ReactDOM.createPortal(
        <div className="black-cover">
            <div className="portal_container">
                <img className="portal_close-button" src={close} onClick={cancelHundle} />
                <img className="portal_image" src={img} />
                <input type="file" onChange={changeProductLocal("img")}/>

                <input className="main-portal_input" onChange={changeProductLocal("name")} type="text" value={name}/>
                <input className="main-portal_input" onChange={changeProductLocal("count")} type="text" value={count}/>
                <input className="main-portal_input" onChange={changeProductLocal("weight")} type="text" value={weight}/>

                <div className="portal_buttons-container">
                    <button onClick={addNewProductHundle}>Save</button>
                    <button onClick={cancelHundle}>Cancel</button>
                </div>
            </div>
        </div>,
        modal
    );
};

const mapStateToProps = (state) => ({})

export default connect(mapStateToProps, { addNewProduct })(MainPortal)