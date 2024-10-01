const addProduct = () => {
  const productField = document.getElementById("product-name");
  const productQty = document.getElementById("product-quantity");
  const product = productField.value;
  const Quantity = productQty.value;
  productField.value = "";
  productQty.value = "";
  //   console.log(product, Quantity);
  displayProduct(product, Quantity);
  saveProductToLocalStorage(product, Quantity);
};

const displayProduct = (product, quaantity) => {
  const ul = document.getElementById("product-container");
  const li = document.createElement("li");
  li.innerText = `${product}: ${quaantity}`;
  ul.appendChild(li);
};

const getStoredShoppingCart = () => {
  const storedCart = localStorage.getItem("cart");
  let cart = {};
  if (storedCart) {
    cart = JSON.parse(storedCart);
  }
  return cart;
};

const saveProductToLocalStorage = (product, quantity) => {
  const cart = getStoredShoppingCart();
  cart[product] = quantity;
  const cartStringify = JSON.stringify(cart);
  //   console.log(cartStringify);
  localStorage.setItem("cart", cartStringify);
};

const displayProductFromLocalStorage = () => {
  const savedCart = getStoredShoppingCart();
  //   console.log(savedCart);
  for (const product in savedCart) {
    const quantity = savedCart[product];
    console.log(product, quantity);
    displayProduct(product, quantity);
  }
};

displayProductFromLocalStorage();
