import defaultGlobalStore from "../store/GlobalStore";

const globalReducer = (state = defaultGlobalStore, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default globalReducer;