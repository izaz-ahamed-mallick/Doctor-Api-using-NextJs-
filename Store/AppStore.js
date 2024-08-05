import AuthSlice from "./AuthSlice";
import ScrollSlice from "./ScrollSlice";

const { configureStore } = require("@reduxjs/toolkit");

const AppStore = configureStore({
    reducer: {
        Auth: AuthSlice,
        scroll: ScrollSlice,
    },
});

export default AppStore;
