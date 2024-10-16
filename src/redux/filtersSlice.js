import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    nameFilter: "", // Змінив поле на більш описове
};

const filterSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {
        changeFilter: (state, action) => {
            if (typeof action.payload === "string") { // Перевірка типу
                state.nameFilter = action.payload;
            } else {
                console.error("Filter value must be a string");
            }
        },
    },
});

export const { changeFilter } = filterSlice.actions;
export const selectNameFilter = (state) => state.filters.nameFilter; // Оновив селектор відповідно до нової назви
export default filterSlice.reducer;
