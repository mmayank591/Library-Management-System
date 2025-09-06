import {createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const borrowSlice=createSlice({
    name: "borrow",
    initialState: {
        loading:false,
        error:null,
        userBorrowedBooks: [],
        allBorrowedBooks: [],
        message: null,
    },
    fetchBorrowedBooksRequest(state){
        state.loading=true;
        state.error=null;
        state.message=null;
    },
    fetchBorrowedBooksSuccess(state,action){
        state.loading=false;
        state.userBorrowedBooks=action.payload;
    },
    fetchBorrowedBooksFailed(state,action){
        state.loading=false;
        state.error=action.payload;
    },
    recordBookRequest(state){},
    recordBookSuccess(state,action){},
    recordBookFailed(state,action){},
})