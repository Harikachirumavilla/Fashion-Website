let subtotal = 0;
let cartCount = 0;

const cartButton = document.getElementById("open-cart-btn");
const sideCart = document.getElementById("side-cart");

cartButton.addEventListener("click", () => {
  sideCart.classList.toggle("open");
});

document.getElementById("close-cart-btn").addEventListener("click", () => {
  sideCart.classList.remove("open");
});

document.querySelectorAll(".atc").forEach(button => {
  button.addEventListener("click", () => {
    const product = button.closest(".product-card");
    const name = product.querySelector(".product-name").textContent;
    const priceText = product.querySelector(".product-price").textContent;
    const imageSrc = product.querySelector("img").src;

    const cleanPrice = parseFloat(priceText.replace(/[^0-9.]/g, ""));

    const li = document.createElement("li");
    li.className = "cart-item";
    li.innerHTML = `
      <img src="${imageSrc}" alt="${name}">
      <div class="cart-item-info">
        <div class="product-name">${name}</div>
        <div class="product-price">${priceText}</div>
      </div>
      <button class="remove-btn">x</button>
    `;

    document.getElementById("cart-items").appendChild(li);
    subtotal += cleanPrice;
    cartCount++;

    document.getElementById("subtotal").textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById("cart-count").textContent = cartCount;
    sideCart.classList.add("open");

    // Add remove functionality
    li.querySelector(".remove-btn").addEventListener("click", () => {
      subtotal -= cleanPrice;
      cartCount--;

      document.getElementById("subtotal").textContent = `$${subtotal.toFixed(2)}`;
      document.getElementById("cart-count").textContent = cartCount;

      li.remove();
    });

    console.log(`${name} - ${priceText} added to cart.`);
  });
});
