export const login=(uid)=>({
    type:'LOGIN',
    uid
});

export const startLogin = (uid) => {
    return (dispatch, getState) => {
        dispatch(login({
            uid
        }));
    };
};

export const logout=()=>({
    type:'LOGOUT'
});