const BASE_URL=" ./js/product/"

const products = [
    {
        id: 1,
        name: "infinix",
        price: 100000,
        image: BASE_URL+ "infinix.jpg", 
    },
    {
        id: 2,
        name: "iphone",
        price: 10000,
        image: BASE_URL+ "infinix.jpg", 
    },
    {
        id: 3,
        name: "iphone",
        price: 100000,
        image: BASE_URL+ "1(3).jpg", 
    },
    {
        id: 4,
        name: "iphone",
        price: 100000,
        image: BASE_URL+ "1.jpg", 
    },
    {
        id: 5,
        name: "iphone",
        price: 100000,
        image: BASE_URL+ "1 (2).jpg", 
    }
]

function addToCart(id){
    let items =sessionStorage.getItem("items")
    if (!items){
        items=[]
    }else{
        items=JSON.parse(items)
    }

    const product= products.filter(product => product.id ==id ) [0]

    items.push(product)

    sessionStorage.setItem("item",JSON.stringify(items))

}

function getCart(){
    let items = sessionStorage.getItem("items")
    if(!items){
        return 0
    }else{
        items=JSON.parse(items)
        return items.length
    }

}