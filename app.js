const user = {
  name: 'Kim',
  active: true,
  cart: [],
  purchases: []
}

// const amazonHistory = [];
const history1 = []; // travel through time, wherever I push to this array

const compose = (f, g) => (...args) => f(g(...args)) // Compose function, Ramda is better
const pipe = (f, g) => (...args) => g(f(...args))

const purchaseItem  = (...fns) => fns.reduce(compose);
const purchaseItem2 = (...fns) => fns.reduce(pipe);

// If I want a new function, I simply add it - the new function will be composed

purchaseItem2(
  addItemToCart,
  applyTaxToItems,
  buyItem,
  emptyUserCart,
)(user, {name: 'laptop', price: 60})
// purchaseItem(
//   emptyUserCart,
//   buyItem,
//   applyTaxToItems,
//   addItemToCart
// )(user, {name: 'laptop', price: 50})
function addItemToCart(user, item) {

  history1.push(user) // Not pure, but...useful
  const updatedCart = user.cart.concat(item)            // New user state
  return Object.assign({}, user, {cart: updatedCart});

}

function applyTaxToItems(user) {

  history1.push(user)
  
  const { cart } = user;
  const taxRate = 1.3;
  
  const updatedCart = cart.map(item => { // new obj, taxed prices
    return {
      name: item.name,
      price: item.price*taxRate
    }
  })

  return Object.assign({}, user, { cart: updatedCart });
}

function buyItem(user) {
  history1.push(user)
  const itemsInCart = user.cart;
  return Object.assign({}, user, { purchases: itemsInCart });
}
function emptyUserCart(user) {
  history1.push(user)
  return Object.assign({}, user, { cart: [] });
}

function refundItem() {

}

function getUserState() {

}

function goBack() {

}

function goForward() {

}