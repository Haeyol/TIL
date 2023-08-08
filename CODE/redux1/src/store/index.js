import { createStore } from 'redux';

const initialState = { counter: 0, showCounter: true };

const counterReducer = (state = initialState, action) => {
  if (action.type === 'increment') {
    // 절대 state.counter++같이 원본 스테이트를 변경하면 안된다. return으로 새 객체를 줘야함
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter
      // showCounter줄을 없애면 undefined로 오버라이딩된다.
    };
  }

  if (action.type === 'increase') {
    return {
      counter: state.counter + action.amount,
      showCounter: state.showCounter
    };
  }

  if (action.type === 'decrement') {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter
    };
  }

  if (action.type === 'toggle') {
    return {
      showCounter: !state.showCounter,
      counter: state.counter
    };
  }

  return state;
};

const store = createStore(counterReducer);

export default store;