const counterFunction = () => {
  let counter = 0;
  return () => {
    counter ++;
    return counter;
  };
};
const incrementer = counterFunction();

export const storeState = (name) => {
  let currentState = { name: name, id: incrementer() };
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = { ...newState };
    return newState;
  };
};


export const stateControl = storeState();

const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop]: (state[prop] || 0) + value
    });
  };
};

export const feed = changeState("soil")(1);
export const blueFood = changeState("soil")(5);

export const hydrate = changeState("water")(1);
export const superWater = changeState("water")(5);

export const light = changeState("light")(1);
export const superLight = changeState("light")(5);