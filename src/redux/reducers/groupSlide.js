import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import groupApi from "../../api/GroupApi";
import { GET_LIST_GROUP } from "../actionTypes";

export const getListGroupAsyncAction = createAsyncThunk(
    GET_LIST_GROUP,
    async () => {
        const groups = await groupApi.getAll();
        return groups;
    }
);

const groupSlide = createSlice({
    name: 'group',
    initialState: {
        groups: [],
        isLoading: false
    },
    reducers: {
        // other reducers
    },
    extraReducers: {
        [getListGroupAsyncAction.fulfilled]: (state, action) => {
            state.groups = action.payload;
            state.isLoading = false;
        },
        [getListGroupAsyncAction.pending]: (state) => {
            state.isLoading = true;
        }
    }
});

export const { actions, reducer } = groupSlide;
export const { incremented, decremented } = actions;

export default groupSlide;

