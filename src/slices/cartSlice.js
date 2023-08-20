import { createSlice } from '@reduxjs/toolkit';

import meatJpg from '../img/meat.jpg';
import meatWebp from '../img/meat.webp';

import milkJpg from '../img/milk.jpg';
import milkWebp from '../img/milk.webp';

import eggsJpg from '../img/eggs.jpg';
import eggsWebp from '../img/eggs.webp';

import potatoJpg from '../img/potato.jpg';
import potatoWebp from '../img/potato.webp';

const initialState = [
  {
    id: '1',
    imageWebp: meatWebp,
    image: meatJpg,
    good: 'Мясо',
    price: '450Р/кг',
    priceInNumbers: 450,
    unit: 'кг',
    value: 1,
  },
  {
    id: '2',
    imageWebp: milkWebp,
    image: milkJpg,
    good: 'Молоко',
    price: '50Р/л',
    priceInNumbers: 50,
    unit: 'л',
    value: 1,
  },
  {
    id: '3',
    imageWebp: eggsWebp,
    image: eggsJpg,
    good: 'Яйца',
    price: '50Р/10шт',
    priceInNumbers: 5,
    unit: 'шт',
    value: 1,
  },
  {
    id: '4',
    imageWebp: potatoWebp,
    image: potatoJpg,
    good: 'Картошка',
    pack: '(мешок)',
    price: '38Р/кг',
    priceInNumbers: 38,
    unit: 'кг',
    value: 1,
  },
];

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add(state, action) {
      const { id } = action.payload;
      const item = state.find((item) => item.id === id);
      if (item && item.value <= 100) {
        item.value += 1;
      }
    },
    remove(state, action) {
      const { id } = action.payload;
      const item = state.find((item) => item.id === id);
      if (item && item.value >= 2) {
        item.value -= 1;
      }
    },
  },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
