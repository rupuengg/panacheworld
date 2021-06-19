import defaultProjectStore from "../store/ProjectStore";

const projectReducer = (state = defaultProjectStore, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default projectReducer;