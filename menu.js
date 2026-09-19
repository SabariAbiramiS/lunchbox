const foods=[

{
id:1,
name:"Burger",
price:199,
category:"Burger",
image:"burger.jfif"
},

{
id:2,
name:"Pizza",
price:299,
category:"Pizza",
image:"pizza.jfif"
},

{
id:3,
name:"Chicken Biryani",
price:249,
category:"Biryani",
image:"biriyani.jfif"
},

{
id:4,
name:"Dosa",
price:99,
category:"South Indian",
image:"dosa.jfif"
},

{
id:5,
name:"Fried Rice",
price:179,
category:"Chinese",
image:"fried.jfif"
},

{
id:6,
name:"Noodles",
price:159,
category:"Chinese",
image:"noodle.jfif"
}

];

const foodContainer=document.getElementById("food-container");

function displayFood(items){

foodContainer.innerHTML="";

items.forEach(food=>{

foodContainer.innerHTML+=`

<div class="card">

<img src="${food.image}">

<h3>${food.name}</h3>

<p>₹${food.price}</p>

<button onclick="addToCart(${food.id})">
Add to Cart
</button>

</div>

`;

});

}

displayFood(foods);

document.getElementById("search").addEventListener("keyup",(e)=>{

const value=e.target.value.toLowerCase();

const filtered=foods.filter(food=>food.name.toLowerCase().includes(value));

displayFood(filtered);

});

function addToCart(id){

let cart=JSON.parse(localStorage.getItem("cart"))||[];

const product=foods.find(food=>food.id===id);

cart.push(product);

localStorage.setItem("cart",JSON.stringify(cart));

document.getElementById("cart-count").innerText=cart.length;

alert(product.name+" Added Successfully!");

}

window.onload=()=>{

const cart=JSON.parse(localStorage.getItem("cart"))||[];

document.getElementById("cart-count").innerText=cart.length;

}
function toggleDark(){
  document.body.classList.toggle("dark");
}
