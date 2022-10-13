import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    arrComment: [
        {username:'userA',content:'acb'},
        {username:'userB',content:'xyz'}
    ]
}

const fakebookMessReducer = createSlice({
  name: 'fakebookMessReducer',
  initialState,
  reducers: {
    addComment: (state,action) => {
        //b1: lấy ra dữ liệu dispatch lên từ action.payload
        let userComment = action.payload;
        state.arrComment.push(userComment);
    }
  }
});

export const {addComment} = fakebookMessReducer.actions

export default fakebookMessReducer.reducer