export async function fetchProductCategories() {
    try{
        fetch('https://dummyjson.com/products/categories')
.then(res => res.json())
.then(console.log);
    } catch(error) {
        console.log(error);
    }
}

export async function fetchProductData(key){
    try{
        fetch(`https://dummyjson.com/products/category/${key}`)
.then(res => res.json())
.then(console.log);
    } catch(error) {
        console.log(error);
    }
}