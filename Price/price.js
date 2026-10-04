const products=[
    { name: "laptop", price: 1000, made:"china"},
    { name: "laptop", price: 1000, made:"Kenya"},
    { name: "laptop", price: 1000, made:"Kenya"},
    { name: "laptop", price: 1000, made:"Tanzania"}

]
const discounts=products.map((product)=>{
    return {
        ...product,
        price: product.price * 0.5
    }
})
console.log(discounts)