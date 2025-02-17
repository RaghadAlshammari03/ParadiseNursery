import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existingItem = state.items.find(item => item.id === product.id);
      if (!existingItem) {
        state.items.push({ ...product, quantity: 1 });
      }
      state.totalQuantity++;
    },
    removeFromCart: (state, action) => {
      const productId = action.payload;
      const existingItem = state.items.find(item => item.id === productId);
      if (existingItem) {
        state.totalQuantity -= existingItem.quantity;
        state.items = state.items.filter(item => item.id !== productId);
      }
    },
    increaseQuantity: (state, action) => {
      const productId = action.payload;
      const item = state.items.find(item => item.id === productId);
      if (item) {
        item.quantity++;
        state.totalQuantity++;
      }
    },
    decreaseQuantity: (state, action) => {
      const productId = action.payload;
      const item = state.items.find(item => item.id === productId);
      if (item) {
        if (item.quantity > 1) {
          item.quantity--;
          state.totalQuantity--;
        } else {
          state.items = state.items.filter(i => i.id !== productId);
          state.totalQuantity--;
        }
      }
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
