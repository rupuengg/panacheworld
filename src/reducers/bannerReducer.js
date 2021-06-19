import defaultBannerStore from "../store/BannerStore";

const bannerReducer = (state = defaultBannerStore, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default bannerReducer;