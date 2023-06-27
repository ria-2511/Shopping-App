export const getUniqueItems = (category,data) => {
    const uniqueItems = []
    data && category && data.products.forEach((product) => {
        if(uniqueItems.findIndex((item) => item === product[category] === -1)) {
            uniqueItems.push(product[category.toLowerCase()])
        }
    })
    return uniqueItems;
}

export const getDiscountPrice = (price , discountPercent) => {
    const costDiff = (discountPercent/100)*price;
    return (price - costDiff)
}