import { configureStore } from "@reduxjs/toolkit";
import groupSlide from "./reducers/groupSlide";

const store = configureStore({
    reducer: {
        group: groupSlide.reducer
    }
});
export default store;