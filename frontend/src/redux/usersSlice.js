import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import.meta.env.VITE_API_URL

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get(import.meta.env.VITE_API_URL);
      return res.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || error.message || "Something went wrong"
      );
    }
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState: { data: [], loading: false, error: null },
  reducers: {},
 extraReducers: (builder) => {
  builder
    .addCase(fetchUsers.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    })
    .addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload; 
    });
}
});

export default usersSlice.reducer;