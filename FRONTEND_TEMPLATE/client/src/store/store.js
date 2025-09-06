import {configureStore} from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import popupReducer from "../store/slices/popupSlice";
import userReducer from "./slices/userSlice";
import bookReducer from "./slices/bookSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        popup: popupReducer,
        user: userReducer,
        book: bookReducer,
    },
});
