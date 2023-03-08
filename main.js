const product=[
    {
        id:1,
        image:"img/headphone.jpg",
        title:"Headphone",
        price:"$50 rs",
    },
    {
        id:2,
        image:"img/blooth.jpg",
        title:"Headphone",
        price:"$600 rs",
    },
    {
        id:3,
        image:"img/bluess.jpg",
        title:"Headphone",
        price:"$100 rs",
    },
    {
        id:4,
        image:"img/eger.jpg",
        title:"Headphone",
        price:"$700 rs",
    },
    {
        id:5,
        image:"img/er.jpg",
        title:"Headphone",
        price:"$400 rs",
    },
]



const categories=[...new Set(product.map((item)=>
    {return item}))]



    let cart=document.getElementById("root")
    cart.innerHTML=categories.map((item)=>
    {
        var {image,title,price}=item;
        return(
            `<div class="box">
                <div class="img-box">
                    <img src=${image}></img>
                </div>
                <div class="left">
                    <p>${title}</p>
                    <h2>${price}</h2>
                    <button>click me</buttton>
                </div>
            </div>`
        )
    }).join("")

