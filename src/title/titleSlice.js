import {createSlice} from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'title',
  initialState: {
    val: [1,2,3,4,5]
  },
  reducers: {
    add: (state, action) => {
      state.val.push(action.payload)
    }
  }
});
export const {add} = slice.actions
export default slice.reducer;