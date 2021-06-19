import { createAction } from "@reduxjs/toolkit";

export const ProjectActionTypes = {
};

export const ProjectActions = {
  loadBannerList: () => createAction(ProjectActionTypes.LOAD_BANNER_LIST),
};