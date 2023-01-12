const initialState = 0;

const reducer = (state, action) => {
    if (action.type === 'add') {
        return state + 1;
    }
    if (action.type === 'minus') {
        return state - 1;
    }
};

export { reducer, initialState };
