const { createSlice } = require("@reduxjs/toolkit");

const scrollSlice = createSlice({
    name: "Scroll",
    initialState: {
        targetSection: null,
    },
    reducers: {
        scrollToSection: (state, action) => {
            state.targetSection = action.payload;
        },
    },
});

export const { scrollToSection } = scrollSlice.actions;

export default scrollSlice.reducer;
