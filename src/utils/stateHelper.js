export const updateProductHelper = (state, name, count, weight, img, productId) => {
    const result = state
    result.map(el => {
        if (el.id === productId) {
            el.name = name
            el.count = count
            el.weight = weight
            el.imageUrl = img
        }
    })
    return result[productId - 1]
}

export const createNewObject = (name, img, count, weight, numb) => {
    return {
        id: numb+1,
        imageUrl: img,
        name: name,
        count: count,
        size: {
            width: 200,
            height: 200
        },
        weight: weight
    }
}
