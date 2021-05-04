export const addItemToCart = (cartItems, cartItemToAdd) => {
    // check if the cartItem we want to add has already been added
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id )
    // if yes, we increase the quantity property, otherwise we return the original cartItems array
    if (existingCartItem) {
        return cartItems.map(cartItem => 
            cartItem.id === cartItemToAdd.id ? 
            {...cartItem, quantity: cartItem.quantity + 1} // we create a new object for the cartItem, spreading all its properties, but increasing the quantity by 1
            : cartItem
            )
    }
    // if no, returns a new array with all the existing items already in there, plus cartItemToAdd with new property of quantity sets to 1
    return [...cartItems, {...cartItemToAdd, quantity: 1}]
}


export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    // check if the cartItem we want to remove is present in the cart
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToRemove.id ) 
    // if we have only have 1 item of this id present in the cart, then remove the item completely
    if (existingCartItem.quantity === 1) {
        return cartItems.filter( cartItem => cartItem.id !== cartItemToRemove.id)
    }
    // reduce quantity by 1 if ids match, otherwise keep the cartItem the same
    return cartItems.map( cartItem => 
        cartItem.id === cartItemToRemove.id 
        ? 
        {...cartItem, quantity: cartItem.quantity -1}
        :
        cartItem
    )
}