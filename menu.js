const menuitems=[
    {
        id:1,
        name:"Garlic Bread",
        price:8.5,
        image:"images/menu-item-thumbnail-01.jpg",
        qty:1
    },
    {
        id:2,
        name:"Mixed Salad",
        price:25,
        image:"images/menu-item-thumbnail-02.jpg",
        qty:1
    },
    {
        id:3,
        name:"Chicken Wings",
        price:10,
        image:"images/menu-item-thumbnail-03.jpg",
        qty:1
    },
    {
        id:4,
        name:"Feast Pizza",
        price:5,
        image:"images/menu-item-thumbnail-04.jpg",
        qty:1
    },
    {
        id:5,
        name:"Chicken Masala",
        price:15,
        image:"images/menu-item-thumbnail-05.jpg",
        qty:1
    },
    {
        id:6,
        name:"MeatBalls",
        price:6.5,
        image:"images/menu-item-thumbnail-06.jpg",
        qty:1
    },
    {
        id:7,
        name:"Fudgecake",
        price:4.5,
        image:"images/menu-item-thumbnail-07.jpg",
        qty:1
    },
    {
        id:8,
        name:"Coffee",
        price:9.5,
        image:"images/menu-item-thumbnail-08.jpg",
        qty:1
    },
    {
        id:9,
        name:"Cold Drinks",
        price:10,
        image:"images/menu-item-thumbnail-09.jpg",
        qty:1
    },
    {
        id:10,
        name:"Drinks",
        price:12.5,
        image:"images/menu-item-thumbnail-10.jpg",
        qty:1
    },
    {
        id:11,
        name:"Onion Pizza",
        price:9.5,
        image:"images/special-menu-2.jpg",
        qty:1
    },
    {
        id:12,
        name:"Veg Roll",
        price:5.5,
        image:"images/special-menu-3.jpg",
        qty:1
    }
]
let menulist=document.querySelector(".menus")
console.log(menulist)
function displaymenu()
{
    menuitems.map((menu)=>{
        menulist.innerHTML+=`
        <div class="col">
          <div class="card h-100 shadow">
            <img src=${menu.image} class="card-img-top" alt="...">
            <div class="card-body text-center">
              <h5 class="card-title">${menu.name}</h5>
              <p class="card-text">$${menu.price}</p>
              <button type="button" class="btn btn-success" onclick="addtocart(${menu.id})">Add to Cart</button>
            </div>
          </div>
        </div>
        `
    })
}
displaymenu()
let cart=[] 
function addtocart(id)
{
    menuitems.forEach((item)=>{
        if(item.id==id)
        {
            cart.push(item)
            localStorage.setItem("Cart",JSON.stringify(cart))
        }
    })
  
}
const cartitems=JSON.parse(localStorage.getItem("Cart"))
console.log(cartitems)
const totalno=document.querySelector(".cartno")
totalno.innerHTML=cartitems.length
function displaycartitems()
{
        
    cartitems.map((c,index)=>{
        document.getElementById("cartlist").innerHTML+=`
        <table style="width:100%">
        <tr>
        <td><img src=${c.image} height=80 width=80></td>
        <td>${c.name}</td>
        <td>$${c.price}</td>
        <td><i class="fa-solid fa-trash text-danger fs-2" onclick="remveitem(${index})"></i></td>
        </tr>
        </table>
        
        `    })
}
displaycartitems()
function gettotal()
{
    let total=0
    cartitems.map((ci)=>{
        total=total+ci.price
        console.log(total)
        return total
    })
    document.querySelector(".subtotal").innerHTML+=
    "Total Amount is: $"+total
}
gettotal()
function remveitem(index)
{
    console.log(index)
    cartitems.splice(index,1)
    console.log(cartitems)
    localStorage.setItem("Cart",JSON.stringify(cartitems))
}