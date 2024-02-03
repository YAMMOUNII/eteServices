import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isloading: "idle",
  gettingStaticData: [
    {
      name: "Beirut",
      value: 1,
    },
    {
      name: "Batroun",
      value: 2,
    },
    {
      name: "Jbeil",
      value: 3,
    },
  ],
};

const StaticSlice = createSlice({
  name: "static",
  initialState,
  reducers: {
    settingStaticData: (state, action) => {
      const { field, value } = action.payload;
      state[field] = value;
    },

    restStaticData: (state) => {
      state.isloading = "idle";
      state.gettingStaticData = [];
    },
  },
});

export const { settingStaticData, restStaticData } = StaticSlice.actions;

export default StaticSlice.reducer;
