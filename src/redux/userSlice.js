import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchUser = createAsyncThunk('user/fetchUser', async (username) => {
  const response = await fetch(`https://api.github.com/users/${username}`);
  const data = await response.json();
  return data;
});

const userSlice = createSlice({
  name: 'user',
  initialState: null,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default userSlice.reducer;