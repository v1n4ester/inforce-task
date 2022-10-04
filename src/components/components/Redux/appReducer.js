import { createNewObject, updateProductHelper } from "../../../utils/stateHelper"
import { productsApi } from "../API/api"

const GET_PRODUCTS = "GET_PRODUCTS"

const initialState = {
    products: []
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCTS: {
            return {
                ...state,
                products: [...action.products]
            }
        }
        default:
            return state

    }
}

const getProducts = (products) => ({ type: GET_PRODUCTS, products })

export const getProductsList = () => async (dispatch) => {
    const response = await productsApi.getProducts()
    dispatch(getProducts(response))
}

export const updateProduct = (name, count, weight, img, productId) => async (dispatch, getState) => {
    const res = updateProductHelper(getState().main.products, name, count, weight, img, productId)
    const response = await productsApi.updateProducts(res, productId)
}

export const removeProduct = (id) => async (dispatch, getState) => {
    const response = await productsApi.removeProduct(id);
    if(response.status == 200){
        const arr = getState().main.products
        arr.splice(id-1, 1);
        dispatch(getProducts(arr))
    }
}

export const addNewProduct = (name, img, count, weight)=>async(dispatch, getState)=>{
    const object = createNewObject(name, img, count, weight, getState().length)
    const response = await productsApi.addNewProduct(object)
    if(response.status === 201){
        dispatch(getProductsList())
    }
}

export default appReducer