import { ADD_TO_CART, REMOVE_FROM_CART, DECREASE_QUANTITY } from './type';
const INITIAL_STATE = {

    cart: [],
    currentItem: null,
    totalAmount: null,
    totalCount: null,
};
// pass action data to reducer
export const cartData = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case ADD_TO_CART:
            //get the item data 
            const item = action.data;
            // check if Item is in the cart
            // const inCart = state.cart.find((item) => item.id === action.payload.id ? true : false);

            const index = state.cart.findIndex((item) => item.id === action.payload.id);
            const newCart = [...state.cart]

            let newCurrentItem = state.currentItem;
            if (index === -1) {
                //not in cart
                newCart.push({ ...item, quantity: 1, totalPrice: action.payload.price })
                newCurrentItem = newCurrentItem + 1
            } else {
                console.log(index)
                newCart[index].quantity += 1
                newCart[index].totalPrice += action.payload.price
            }

            return {
                ...state,
                /*  cart: inCart ?
                     state.cart.map((item) => item.id === action.payload.id
                         ? { ...item, quantity: item.quantity + 1, totalPrice: item.totalPrice + action.payload.price } : item)
                     : [...state.cart, { ...item, quantity: 1, totalPrice: action.payload.price }],
                 currentItem: inCart ? state.currentItem : state.currentItem + 1,
                 totalCount: state.totalCount + 1,
                 totalAmount: state.totalAmount + action.payload.price */
                cart: newCart,
                currentItem: newCurrentItem,
                totalCount: state.totalCount + 1,
                totalAmount: state.totalAmount + action.payload.price

            };

        case DECREASE_QUANTITY: {
            //check if quantity > 1
            //const quantityAvailable = state.cart.find((item) => (item.id === action.payload.id && item.quantity > 1) ? true : false);
            const index = state.cart.findIndex((item) => item.id === action.payload.id);
            const newCart = [...state.cart]
            let newCurrentItem = state.currentItem;
            if (newCart[index].quantity > 1) {
                newCart[index].quantity -= 1
                newCart[index].totalPrice -= action.payload.price

            } else {
                //removeFromCart
                newCurrentItem -= 1
                newCart.splice(index, 1)

            }

            return {
                ...state,
                /* cart: quantityAvailable ? state.cart.map((item) => item.id === action.payload.id ? { ...item, quantity: item.quantity - 1, totalPrice: item.totalPrice - item.price } : item) : state.cart.filter((item) => item.id !== action.payload.id),
                currentItem: quantityAvailable ? state.currentItem : state.currentItem - 1,
                totalCount: state.totalCount - 1,
                totalAmount: state.totalAmount - action.payload.price */
                cart: newCart,
                currentItem: newCurrentItem,
                totalCount: state.totalCount - 1,
                totalAmount: state.totalAmount - action.payload.price

            };
        }
        case REMOVE_FROM_CART: {
            //const currentProduct = state.cart.find((item) => item.id === action.payload.id)
            const index = state.cart.findIndex((item) => item.id === action.payload.id);
            const newCart = [...state.cart]
            const currentProduct = newCart[index];
            newCart.splice(index, 1)
            return {
                ...state,
                cart: newCart,
                currentItem: state.currentItem - 1,
                totalCount: state.totalCount - currentProduct.quantity,
                totalAmount: state.totalAmount - currentProduct.totalPrice
            };
        }

        default:
            return state;
    }
}





