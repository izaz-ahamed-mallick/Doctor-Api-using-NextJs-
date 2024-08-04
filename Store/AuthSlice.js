const { createSlice } = require("@reduxjs/toolkit");
const { act } = require("react");
const { Cookies } = require("react-cookie");
let cookie = new Cookies();

const AuthSlice = createSlice({
    name: "Auth",
    initialState: {
        name: cookie.get("name"),
        image: cookie.get("image"),
        isAuthenticate: !!cookie.get("token"),
    },
    reducers: {
        loginDetails: (state, action) => {
            const { name, token, image, _id } = action.payload;
            cookie.set("name", name, { path: "/" });
            cookie.set("image", image, { path: "/" });
            cookie.set("token", token, { path: "/" });
            cookie.set("userId", _id, { path: "/" });
            state.isAuthenticate = true;
            state.name = name;
            state.image = image;
        },
        logOutDetails: (state) => {
            state.isAuthenticate = false;
            cookie.remove("name", { path: "/" });
            cookie.remove("image", { path: "/" });
            cookie.remove("token", { path: "/" });
            cookie.remove("userId", { path: "/" });
            state.name = "";
            state.image = null;
        },
    },
});

export const { logOutDetails, loginDetails } = AuthSlice.actions;
export default AuthSlice.reducer;
