import { createAsyncThunk } from "@reduxjs/toolkit";
import { ChatHistoryService } from "service/chat-history";

const { chatHistory } = ChatHistoryService();
export const fetchHistory = createAsyncThunk(
  "fetchHistory",
  async (args:any, thunkAPI) => {
    try {
      const response = await chatHistory(args);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
