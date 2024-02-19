import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import data from "../components/PhysicalActivityList.json";

const initialState = [
  {
    id: 1,
    name: "Demo",
    feature: "Heats",
    imageLink:
      "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg",

    time: "1:12",
  },
  {
    id: 2,
    name: "Initial",
    feature: "Heats",
    imageLink:
      "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg",

    time: "2:13",
  },
  {
    id: 3,
    name: "State",
    feature: "SEMI'S",
    imageLink:
      "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg",

    time: "3:14",
  },
];
export const getCycling = createAsyncThunk(
  "activityList/getCycling",
  async () => {
    console.log(data, "data ");
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data);
      }, 1000);
    });
  }
);
export const getFeatured = createAsyncThunk(
  "activityList/getFeatured",
  async () => {
    console.log(data, "data of getFeatured");
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data);
      }, 1000);
    });
  }
);
const activityListSlice = createSlice({
  name: "activityList",
  initialState: {
    activities: initialState,
    status: null,
  },
  extraReducers: {
    [getCycling.fulfilled]: (state, action) => {
      state.activities = action.payload?.cycling;

      //if we want to add the json to an existing array
      console.log("action", action);
      console.log("state", state);
    },
    [getFeatured.fulfilled]: (state, action) => {
      //If we have to totally replace the existing array:
      state.activities = action.payload?.featured;

      //if we want to add the json to an existing array
      console.log("action", action);
      console.log("state", state);
    },

    // [getCycling.pending]: (state) => {
    //   state.status = "Fetching todos. Please wait a moment...";
    // },
    // [getCycling.rejected]: (state) => {
    //   state.status = "Failed to fetch data...";
    // },
  },
});

export default activityListSlice.reducer;
