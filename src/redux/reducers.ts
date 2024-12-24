import { combineReducers } from "@reduxjs/toolkit";
import chats from "redux/slices/chats";

const rootReducer = combineReducers({
  chats,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
