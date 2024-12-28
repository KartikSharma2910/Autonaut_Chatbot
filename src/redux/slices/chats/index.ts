import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { chatHistoryConvertor } from "helper/chat-history-convertor";
import { fetchHistory } from "redux/thunks";
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
  extraReducers: (builder) => {
    builder.addCase(fetchHistory.fulfilled, (state, action) => {
      const response = chatHistoryConvertor(action.payload);
      state.push(...(response as any));
    });
  },
});

export const { addChat } = chatsSlice.actions;
export default chatsSlice.reducer;
