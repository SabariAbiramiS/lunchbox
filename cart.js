let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartItems = document.getElementById("cart-items");
const total = document.getElementById("total");

function displayCart() {
  cartItems.innerHTML = "";

  let grandTotal = 0;

  cart.forEach((item, index) => {
    if (!item.quantity) {
      item.quantity = 1;
    }

    grandTotal += item.price * item.quantity;

    cartItems.innerHTML += `
      <div class="cart-card">
        <img src="${item.image}" width="100">

        <div>
          <h3>${item.name}</h3>
          <p>₹${item.price}</p>

          <div class="qty">
            <button onclick="decreaseQty(${index})">-</button>
            <span>${item.quantity}</span>
            <button onclick="increaseQty(${index})">+</button>
          </div>

          <button onclick="removeItem(${index})">Remove</button>
        </div>
      </div>
    `;
  });

  total.innerHTML = `Total : ₹${grandTotal}`;

  localStorage.setItem("cart", JSON.stringify(cart));
}

function increaseQty(index) {
  cart[index].quantity += 1;
  displayCart();
}

function decreaseQty(index) {
  if (cart[index].quantity > 1) {
    cart[index].quantity -= 1;
  } else {
    cart.splice(index, 1);
  }
  displayCart();
}

function removeItem(index) {
  cart.splice(index, 1);
  displayCart();
}

displayCart();
let discount = 0;

function applyCoupon(){
  let code = document.getElementById("coupon").value;

  if(code === "LUNCH10"){
    discount = 10;
    alert("Coupon Applied! 10% OFF");
  } else {
    alert("Invalid Coupon");
    discount = 0;
  }

  displayCart();
}
total.innerHTML = `Total : ₹${grandTotal}`;
let finalTotal = grandTotal - (grandTotal * discount / 100);

total.innerHTML = `
Total : ₹${finalTotal.toFixed(0)}
<br>
<small>Discount: ${discount}%</small>
`;