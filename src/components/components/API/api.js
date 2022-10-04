import * as axios from 'axios'

export const productsApi = {
    getProducts() {
        return axios.get('http://localhost:3000/products').then(res => res.data)
    },
    updateProducts(obj, id) {
        return axios.put('http://localhost:3000/products/' + id, obj)
    },
    removeProduct(id){
        return axios.delete('http://localhost:3000/products/' + id)
    },
    addNewProduct(obj){
        return axios.post('http://localhost:3000/products', obj)
    }
}