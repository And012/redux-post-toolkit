import {createSlice} from '@reduxjs/toolkit';

export const slice = createSlice({
  //toolkit gives us advantage to modify current state. It is using immer lib under the hood.
  //immer It is based on the copy-on-write mechanism.
  name: 'posts', //
  initialState: {values: []},
  reducers: {
    add: (state, action) => {
      state.values.push(action.payload);
    },
    //action.payload should bring index of element that we want to delete
    deleteCurrent: (state, action) => {
      state.values.splice(action.payload, 1);
    },
    deleteAll: (state) => {
      state.values = [];
    }
  }
});
export default slice.reducer
//above is reducer for configureStore
export const {add, deleteCurrent, deleteAll} =  slice.actions
//above add deleteCurrent edit are action creators if we call them with argument argument will be as payload
//add(15) --> {type: 'posts/add', payloud: 15}
//type posts/add is related with the name on line 5 add is related with line 8 method name