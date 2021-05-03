import { createSelector } from 'reselect';

// input selector: function that takes the whole state as a parameter and returns a slice of it
const selectCart = state => state.cart;

// output selector
export const selectCartItems = createSelector(
    [selectCart],                                   // 1st argument: collection, array of all the input selectors
    cart => cart.cartItems                          // 2nd : a function that will return the value we want out of the selector
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce( 
        (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity 
    , 0)
)