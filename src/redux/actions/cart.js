export const addPizzaToCart = pizzaObj => ({
    type: 'ADD_PIZZA_TO_CART',
    payload: pizzaObj
});

export const clearCart = () => ({
    type: 'CLEAR_CART'
});

export const clearCartItem = (id) => ({
    type: 'CLEAR_CART_ITEM',
    payload: id
});

export const plusItem = (id) => ({
    type: 'PLUS_ITEM',
    payload: id
});

export const minusItem = (id) => ({
    type: 'MINUS_ITEM',
    payload: id
});