import { useEffect, useReducer } from 'react';

import { todoReducer } from './todoReducer';

const init = (): any[] => {
    return JSON.parse(localStorage.getItem('todos') || '[]');
};

export const useTodo = () => {
    const [states, dispatch] = useReducer<(initialState: any[], action: any, initializer?: (arg: any[]) => any[]) => any[], any>(todoReducer, [], init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(states || []));
    }, [states]);

    const onNewTodo = (form: any) => {
        const action = {
            type: 'ADD_TODO_ACTION',
            payload: {
                ...form,
                id: new Date().getTime(),
                done: false,
            },
        };

        dispatch(action);
    };

    const onRemoveTodo = (id: number) => {
        const action = {
            type: 'REMOVE_TODO_ACTION',
            payload: id,
        };

        dispatch(action);
    };

    const onToggleTodo = (id: number) => {
        console.log('toggled');

        const action = {
            type: 'TOGGLE_TODO_ACTION',
            payload: id,
        };

        dispatch(action);
    };

    return {
        states,
        pendingCount: states.filter((todo: { done: any }) => !todo.done).length,
        todosCount: states.length,
        onNewTodo,
        onRemoveTodo,
        onToggleTodo,
    };
};
