import defaultOfferStore from "../store/OfferStore";

const offerReducer = (state = defaultOfferStore, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default offerReducer;