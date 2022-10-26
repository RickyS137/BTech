import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

export const loginUser = createAsyncThunk("loginUser", async (user, {dispatch}) => {
    // await axios.post("https://jsonplaceholder.typicode.com/users", {code:code})
    setUsers(user)
    console.log(users);
    localStorage.setItem("user", JSON.stringify(true));
    setTimeout(()=>window.location.reload(),100)
});

const users = {
    id: 0,
    email: "",
    password: "",
};

const usersReducer = createSlice({
    name: "users",
    initialState: users,
    reducers: {
        setUsers(state, action){
            state.users = [...[state.users],{
                id: state.id+1,
                email: action.email,
                password: action.password,
                },];
        },
    },
});

export default usersReducer.reducer;
export const {setUsers} = usersReducer.actions;