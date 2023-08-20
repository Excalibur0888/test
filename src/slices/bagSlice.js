import {createSlice} from "@reduxjs/toolkit";

const initialState = []

const bagSlice = createSlice({
    name: 'bag',
    initialState,
    reducers: {
        addTo(state, action) {
            const item = action.payload;
            const existingItem = state.find((i) => i.id === item.id);

            if (existingItem) {
                // Если товар уже есть в корзине, увеличиваем количество
                existingItem.value += item.value;
            } else {
                // Иначе, добавляем товар в корзину
                state.push(item);
            }
        },
        removeFrom(state, action) {
            const itemId = action.payload;
            const index = state.findIndex((item) => item.id === itemId);

            if (index !== -1) {
                // Если товар найден, удаляем его из корзины
                state.splice(index, 1);
            }
        },
    }
})

export const removeSingleItemFromCart = (itemId) => (dispatch, getState) => {
    const { cart } = getState();

    const existingItem = cart.find((item) => item.id === itemId);

    if (existingItem && existingItem.quantity > 1) {
        // Если товар найден в корзине и его количество больше 1,
        // уменьшаем количество на 1
        dispatch(removeFrom(itemId));
    } else {
        // Иначе, удаляем весь товар из корзины
        dispatch(removeFrom(itemId));
    }
};

export const {addTo, removeFrom} = bagSlice.actions
export default bagSlice.reducer;