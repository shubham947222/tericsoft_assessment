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
export const getArmoury = createAsyncThunk(
  "activityList/getArmoury",
  async () => {
    console.log(data, "data of getFeatured");
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data);
      }, 1000);
    });
  }
);
export const getAquatics = createAsyncThunk(
  "activityList/getAquatics",
  async () => {
    console.log(data, "data of getFeatured");
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data);
      }, 1000);
    });
  }
);
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
export const getEqestrian = createAsyncThunk(
  "activityList/getEqestrian",
  async () => {
    console.log(data, "data ");
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data);
      }, 1000);
    });
  }
);

export const getExtreme = createAsyncThunk(
  "activityList/getExtreme",
  async () => {
    console.log(data, "data ");
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data);
      }, 1000);
    });
  }
);
export const getGolf = createAsyncThunk("activityList/getGolf", async () => {
  console.log(data, "data ");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 1000);
  });
});

export const getGymnastics = createAsyncThunk(
  "activityList/getGymnastics",
  async () => {
    console.log(data, "data ");
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data);
      }, 1000);
    });
  }
);

export const getLake = createAsyncThunk("activityList/getLake", async () => {
  console.log(data, "data ");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(data);
    }, 1000);
  });
});

const activityListSlice = createSlice({
  name: "activityList",
  initialState: {
    activities: initialState,
    status: null,
  },
  extraReducers: {
    [getFeatured.fulfilled]: (state, action) => {
      //If we have to totally replace the existing array:
      state.activities = action.payload?.featured;
      state.status = true;

      //if we want to add the json to an existing array
      console.log("action", action);
      console.log("state", state);
    },
    [getArmoury.fulfilled]: (state, action) => {
      //If we have to totally replace the existing array:
      state.activities = action.payload?.armoury;

      //if we want to add the json to an existing array
      console.log("action", action);
      console.log("state", state);
    },
    [getAquatics.fulfilled]: (state, action) => {
      //If we have to totally replace the existing array:
      state.activities = action.payload?.aquatics;
      state.status = true;

      //if we want to add the json to an existing array
      console.log("action", action);
      console.log("state", state);
    },
    [getCycling.fulfilled]: (state, action) => {
      state.activities = action.payload?.cycling;
      state.status = true;

      //if we want to add the json to an existing array
      console.log("action", action);
      console.log("state", state);
    },
    [getEqestrian.fulfilled]: (state, action) => {
      state.activities = action.payload?.eqestrian;
      state.status = true;

      //if we want to add the json to an existing array
      console.log("action", action);
      console.log("state", state);
    },
    [getExtreme.fulfilled]: (state, action) => {
      state.activities = action.payload?.extreme;
      state.status = true;

      //if we want to add the json to an existing array
      console.log("action", action);
      console.log("state", state);
    },

    [getGolf.fulfilled]: (state, action) => {
      state.activities = action.payload?.golf;
      state.status = true;

      //if we want to add the json to an existing array
      console.log("action", action);
      console.log("state", state);
    },

    [getGymnastics.fulfilled]: (state, action) => {
      state.activities = action.payload?.gymnastics;
      state.status = true;

      //if we want to add the json to an existing array
      console.log("action", action);
      console.log("state", state);
    },

    [getLake.fulfilled]: (state, action) => {
      state.activities = action.payload?.lake;
      state.status = true;

      //if we want to add the json to an existing array
      console.log("action", action);
      console.log("state", state);
    },

    // [getCycling.pending]: (state) => {
    //   state.status = "Fetching todos. Please wait a moment...";
    // },
    [getLake.rejected]: (state) => {
      state.status = 404;
    },
  },
});

export default activityListSlice.reducer;
