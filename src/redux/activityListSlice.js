import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import data from "../components/PhysicalActivityList.json";

const initialState = [
  {
    id: 1,
    name: "Demo",
    feature: "Heats",
    type: "Mixed",

    imageLink:
      "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg",

    time: "1:12",
  },
  {
    id: 2,
    name: "Initial",
    type: "Mixed",

    feature: "Heats",
    imageLink:
      "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg",

    time: "2:13",
  },
  {
    id: 3,
    name: "State",
    type: "Mixed",

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
      }, 300);
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
      }, 300);
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
      }, 300);
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
      }, 3000);
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
      }, 300);
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
      }, 300);
    });
  }
);
export const getGolf = createAsyncThunk("activityList/getGolf", async () => {
  console.log(data, "data ");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 300);
  });
});

export const getGymnastics = createAsyncThunk(
  "activityList/getGymnastics",
  async () => {
    console.log(data, "data ");
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data);
      }, 300);
    });
  }
);

export const getLake = createAsyncThunk("activityList/getLake", async () => {
  console.log(data, "data ");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(data);
    }, 300);
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
      state.activities = action.payload?.featured;
      state.status = true;

      console.log("action", action);
      console.log("state", state);
    },
    [getArmoury.fulfilled]: (state, action) => {
      state.activities = action.payload?.armoury;

      console.log("action", action);
      console.log("state", state);
    },
    [getAquatics.fulfilled]: (state, action) => {
      state.activities = action.payload?.aquatics;
      state.status = true;

      console.log("action", action);
      console.log("state", state);
    },
    [getCycling.fulfilled]: (state, action) => {
      state.activities = action.payload?.cycling;
      state.status = true;

      console.log("action", action);
      console.log("state", state);
    },
    [getCycling.pending]: (state) => {
      state.activities = [];
      state.status = "pending";
    },

    [getEqestrian.fulfilled]: (state, action) => {
      state.activities = action.payload?.eqestrian;
      state.status = true;
      console.log("action", action);
      console.log("state", state);
    },
    [getExtreme.fulfilled]: (state, action) => {
      state.activities = action.payload?.extreme;
      state.status = true;

      console.log("action", action);
      console.log("state", state);
    },

    [getGolf.fulfilled]: (state, action) => {
      state.activities = action.payload?.golf;
      state.status = true;

      console.log("action", action);
      console.log("state", state);
    },

    [getGymnastics.fulfilled]: (state, action) => {
      state.activities = action.payload?.gymnastics;
      state.status = true;

      console.log("action", action);
      console.log("state", state);
    },

    [getLake.fulfilled]: (state, action) => {
      state.activities = action.payload?.lake;
      state.status = true;

      console.log("action", action);
      console.log("state", state);
    },

    [getLake.rejected]: (state) => {
      state.status = 404;
    },
  },
});

export default activityListSlice.reducer;
