import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
    items: [],
    totalAmount: 0
};

const cartReducer = (state, action) => {
    if(action.type === 'ADD'){
     
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;

        const existingCartItemIndex = state.items.findIndex((item) => item.id === action.item.id);
        const existingCartItem = state.items[existingCartItemIndex];

        let updatedItems;

        if(existingCartItem){
            let updatedItem = {
                ...existingCartItem, 
                amount: existingCartItem.amount + action.item.amount
            };

            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        } else{
            updatedItems = state.items.concat(action.item);
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        };
    }
    if(action.type === 'REMOVE'){
        
        const existingCartItemIndex = state.items.findIndex((item) => item.id === action.id);
        const existingCartItem = state.items[existingCartItemIndex];
        const updatedTotalAmount = state.totalAmount - existingCartItem.price;

        let updatedItems;
        if(existingCartItem.amount === 1){
            updatedItems = state.items.filter((item) => item.id !== action.id);

        } else{
            let updatedItem = {...existingCartItem,
                amount: existingCartItem.amount - 1};
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        }
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        };
    }

    if(action.type === 'CLEAR'){
        return defaultCartState;
    }

    return defaultCartState;
};


const CartProvider = (props) => {
   const [cartState, dispatchCartState]= useReducer(cartReducer, defaultCartState);

   const addCartItemHandler = (item) => {
        dispatchCartState({type:'ADD', item: item});
   };
   
   const removeCartItemHandler = (id) => {
        dispatchCartState({type:'REMOVE', id:id});
   };

   const clearCartHandler = () => {
        dispatchCartState({type: 'CLEAR'});
   }

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addCartItemHandler,
        removeItem: removeCartItemHandler,
        clearCart: clearCartHandler
    };

    return(
        <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>
    );
};

export default CartProvider;