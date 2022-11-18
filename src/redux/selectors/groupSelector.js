import { createSelector } from "@reduxjs/toolkit";

/** Selector **/
const groupSelector = (state) => state.group;

const selectListGroupSelector = createSelector(
    groupSelector,
    state => state.groups);

const selectLoadingSelector = createSelector(
    groupSelector,
    state => state.isLoading);

/** function */
export const selectListGroups = (state) => {
    return selectListGroupSelector(state);
}

export const selectLoading = (state) => {
    return selectLoadingSelector(state);
}

