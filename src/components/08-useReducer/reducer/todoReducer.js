export const todoReducer = (state = [], action) => {
    switch (action.type) {
        case 'add':
            return [...state, action.payload];
        case 'delete':
            return state.filter(todo => todo.id !== action.payload.id);
        case 'toggle':
            return state.map(todo =>
                (action.payload.id === todo.id)
                    ? { ...todo, done: !todo.done }
                    : todo);
        default:
            throw new Error();
    }
};

