export const todoReducer = (state: any[] = [], action: any = {}): any[] => {
    switch (action.type) {
        case 'ADD_TODO_ACTION':
            return [...state, action.payload];
        case 'REMOVE_TODO_ACTION':
            return state.filter((value) => value.id !== action.payload);
        case 'TOGGLE_TODO_ACTION':
            return state.map((value) => {
                if (value.id === action.payload) {
                    return {
                        ...value,
                        done: !value.done,
                    };
                }

                return value;
            });
        default:
            return state;
    }
};
