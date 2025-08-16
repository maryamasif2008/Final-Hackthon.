const products = [
  { id: 1, name: "Silk Hijab", price: 299, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5wl1iXFfgmsf6TYRB3uwmo7XVf7E3fJCqUjee5w5bXjcWBGDIfsTKrPqSryPx3QAFZpU&usqp=CAU", rating: 4.5 },
  { id: 2, name: "Sharm Pink Hijab", price: 99, image: "https://i0.wp.com/mlhijab.com/wp-content/uploads/2022/01/5A1EE86C-F9A6-484F-858B-5354CB0709D5.jpeg?fit=1536%2C2048&ssl=1", rating: 4 },
  { id: 3, name: "Shefoon Hijab", price: 49, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpyCQkW3CUkwe7wLocx_FpzOA_vAUK3ZsNnFBLQgWFKbUua6ujJX10EyaojANx4fvm_ro&usqp=CAU", rating: 3.5 },
  { id: 4, name: "Purple Hijab", price: 59, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRecRrquEvNtMsCQX2L2fI1aNgY77LVeiSv-mVkZn7CpJPzuGm0FofRS5bRf6IfvVoofx4&usqp=CAU", rating: 4.2 },
  { id: 5, name: "Luxury Hijab", price: 99, image: "https://hijabgallery.pk/cdn/shop/files/WhatsApp_Image_2025-06-11_at_01.54.15_6e1162e4.jpg?v=1750285448", rating: 3 },
  { id: 6, name: "Silk Hijab", price: 79, image: "https://www.happyhijabis.com/cdn/shop/files/58898083-9EAD-4B49-910C-6A5AAB224F8E.jpg?v=1708536238&width=533", rating: 4.7 },
  { id: 7, name: "Primium Hijab", price: 35, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZm2rym-l8LtHtFzpzOEYZc1sSluLztmLfHBFGwkRP4zaosgpDtlcoJMeToYDT2do5JTg&usqp=CAU", rating: 4 },
  { id: 8, name: "Crinkle Hijab", price: 120, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEant0p3LBDSIwwGIdFtzb01tLR0AsLSYQQq6TnUhnhCdMH779uGdExzPx6neVcgHfT_o&usqp=CAU", rating: 4.3 },
  { id: 9, name: "Hijab Gift Box", price: 199, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8c82hzCzxdsaM2W7t97EUTO9NJQyMguJKsCzpqv9BHJODBYMIVpeNjCi6-k5cwHM0gvo&usqp=CAU", rating: 4 },
  { id: 10, name: "Light Pink Hijab", price: 159, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUEcwk2ii2TqH1_H1bjiiYL2NUU9ucyDuVrbcHlDECHaahJVqfFfUvDGQ5p4W9d4vTBDk&usqp=CAU", rating: 3.8 },
  { id: 11, name: "Latest Hijab", price: 899, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa9yFw0vMIyKEXFYb-UkUSVWfHPnM6N5QZAVv3qJaDVRSp0Z_PqXHqJEvglnKMAeNPdmU&usqp=CAU", rating: 4.6 },
  { id: 12, name: "Sky Blue Hijab", price: 499, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYvYQSUeBvHNNc2V9USRlGztaicytgJSfhGMROadMWC-uI5zFAPLZ-wRa8mTqGxgTsUYQ&usqp=CAU", rating: 4.4 },
  { id: 13, name: "Sprinkle Hijab", price: 19, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiKeNKKRvmYJsOg3CtX_GKixsifY-M5upHXq8jqPDWjolfabnM571svKFLNfQmgLeVV40&usqp=CAU", rating: 3.7 },
  { id: 14, name: "Silk Hijab", price: 10, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-xPhhS5-ozy75BOBQlprQDa3TodXPuWYxmUPr_AMS4HgxUWOPS0rtSO1bRzshJ36VuUw&usqp=CAU", rating: 3.9 },
  { id: 15, name: "Muna Satin Hijab", price: 299, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6x8mXkRRB2ssh9m8kCylnwu7ijP5zZzuhpFAHVldCGYc5U59R5nOx70DIbxCF6xMC4CA&usqp=CAU", rating: 4.1 },
  { id: 16, name: "Dark Blue Hijab", price: 229, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT38757B9TItN-jg0-1BGafCY48-ExyygTd0Y24UCuo9BSpHa5fHlWbNphLEY2qXNJGxEk&usqp=CAU", rating: 4.2 },
  { id: 17, name: "Textured Muna Hijab", price: 39, image: "https://images.meesho.com/images/products/357257191/yxir9_512.webp?width=512", rating: 3.5 },
  { id: 18, name: "Red Silk Hijab", price: 89, image: "https://mala.pk/cdn/shop/files/cri3.jpg?v=1752754898", rating: 4.0 },
];

// State
let cart = [];

// DOM Elements
const productList = document.getElementById('product-list');
const cartItems = document.getElementById('cart-items');
const cartCount = document.getElementById('cart-count');
const checkoutBtn = document.getElementById('checkout-btn');
const checkoutPopup = document.getElementById('checkout-popup');
const orderSuccess = document.getElementById('order-success');
const checkoutForm = document.getElementById('checkout-form');
const searchInput = document.getElementById('search-input');

// Helper: Generate stars string from rating
function getStars(rating) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  let stars = "⭐".repeat(fullStars);
  if (halfStar) stars += "✨";
  return stars;
}

// Render Products (with optional search)
function renderProducts(searchTerm = "") {
  productList.innerHTML = '';

  const filtered = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (filtered.length === 0) {
    productList.innerHTML = '<p>No products found.</p>';
    return;
  }

  filtered.forEach(product => {
    const div = document.createElement('div');
    div.className = 'product';
    const stars = getStars(product.rating);
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h4>${product.name}</h4>
      <p>Price: $${product.price}</p>
      <p class="rating">Rating: ${stars} (${product.rating})</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productList.appendChild(div);
  });
}

// Add to Cart
function addToCart(id) {
  const existing = cart.find(item => item.id === id);
  if (existing) {
    existing.qty++;
  } else {
    const product = products.find(p => p.id === id);
    cart.push({ ...product, qty: 1 });
  }
  updateCart();

  // Open new page with product info
  window.location.href = `product_checkout.html?id=${id}`;
}

// Delete from Cart
function deleteFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  updateCart();
}

// Update Quantity
function updateQty(id, value) {
  const item = cart.find(i => i.id === id);
  if (item) {
    item.qty = parseInt(value);
    if (item.qty <= 0) {
      deleteFromCart(id);
    } else {
      updateCart();
    }
  }
}

// Update Cart UI
function updateCart() {
  cartItems.innerHTML = '';
  cart.forEach(item => {
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `
      <h4>${item.name}</h4>
      <p>Qty: <input type="number" min="1" value="${item.qty}" onchange="updateQty(${item.id}, this.value)" /></p>
      <p>Total: $${item.qty * item.price}</p>
      <button onclick="deleteFromCart(${item.id})">Remove</button>
    `;
    cartItems.appendChild(div);
  });

  cartCount.textContent = cart.reduce((sum, item) => sum + item.qty, 0);
  checkoutBtn.disabled = cart.length === 0;
}

// Show Checkout Form
checkoutBtn.addEventListener('click', () => {
  checkoutPopup.classList.remove('hidden');
});

// Submit Checkout Form
checkoutForm.addEventListener('submit', (e) => {
  e.preventDefault();
  checkoutPopup.classList.add('hidden');
  orderSuccess.classList.remove('hidden');
});

// Search Listener
searchInput.addEventListener('input', () => {
  const searchTerm = searchInput.value;
  renderProducts(searchTerm);
});

// Initial Load
renderProducts();
