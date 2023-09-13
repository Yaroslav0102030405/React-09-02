// import { create } from 'json-server';
import { createStore } from 'redux';

// 3 шаг - создали начальное состояние
const initialState = {
  counter: {
    value: 10,
    step: 15,
  },
};

// 2 шаг - создали редюсер
const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    // когда мы обновляем от типа экшина каунтер
    case 'counter/Increment':
      // мы возвращаем полностью новое состояние
      return {
        // распыляем предыдущий стейт чтобы все кроме каунтера сохранилось
        ...state,
        // обновляем каунтер и распыляем каунтер все чтобы сохранилось все кроме велью и велью обновляем
        counter: {
          ...state.counter,
          value: state.counter.value + payload,
        },
      };

    case 'counter/Decrement':
      return {
        ...state,
        counter: {
          ...state.counter,
          value: state.counter.value - payload,
        },
      };

    default:
      return state;
  }
};

// 1 шаг инциализировали стор
const store = createStore(reducer);

export default store;
