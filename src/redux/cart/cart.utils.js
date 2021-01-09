export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
    );

 // if the cartItem to be added exists in the cart add 1 to the quantity,
//  if not add the cartitem to the cart
    if (existingCartItem){
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id
      ? { ...cartItem, quantity: cartItem.quantity +1 }
      :cartItem
      )
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1}];
};
