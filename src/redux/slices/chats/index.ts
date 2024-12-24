import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Chat } from "types/chats";

const initialState: Chat[] = [];

const chatsSlice = createSlice({
  name: "chats",
  initialState,
  reducers: {
    addChat: (state, action: PayloadAction<Chat>) => {
      state.push(action.payload);
    },
  },
});

export const { addChat } = chatsSlice.actions;
export default chatsSlice.reducer;
