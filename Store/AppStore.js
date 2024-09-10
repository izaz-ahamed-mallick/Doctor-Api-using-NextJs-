import AuthSlice from "./AuthSlice";

const { configureStore } = require("@reduxjs/toolkit");

const AppStore = configureStore({
    reducer: {
        Auth: AuthSlice,
    },
});

export default AppStore;
