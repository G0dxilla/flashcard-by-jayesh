import { configureStore } from "@reduxjs/toolkit";

import flashcardReducer from "./reducers/flashcardSlice";

const Store = configureStore({
  reducer: {
    flashcard: flashcardReducer,
    
  },
});
export default Store;