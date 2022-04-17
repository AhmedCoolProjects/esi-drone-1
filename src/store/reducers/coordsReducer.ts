import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type coordsItem = {
  lat: number;
  lng: number;
};

interface CoordsState {
  coords: coordsItem[];
}

const initialState: CoordsState = {
  coords: [],
};

const coordsSlice = createSlice({
  name: "coord",
  initialState,
  reducers: {
    addCoords: (state, action) => {
      state.coords = action.payload;
    },
  },
});

export const { addCoords } = coordsSlice.actions;
// selector
export const coordsReducer = coordsSlice.reducer;
