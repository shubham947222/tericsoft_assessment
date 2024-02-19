import { configureStore } from "@reduxjs/toolkit";
import activityListSlice from "./activityListSlice";

const store = configureStore({
  reducer: {
    activityList: activityListSlice,
  },
});

export default store;
