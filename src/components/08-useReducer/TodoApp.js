import React, { useCallback, useEffect, useReducer } from 'react';
import { Todos } from './Todos';
import { todoReducer } from './reducer/todoReducer';

import './styles.css';
import { AddTodo } from './AddTodo';

// const initialStateTodos = [{
//     id: new Date().getTime(),
//     describe: 'Buy milk',
//     done: false
// }];

const init = () => JSON.parse(localStorage.getItem('todos')) || [];

export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init);

    useEffect(() => localStorage.setItem('todos', JSON.stringify(todos)), [todos])

    const handlerDelete = (id) =>
        dispatch({
            type: 'delete',
            payload: {
                id
            }
        });

    const handlerToggle = (id) =>
        dispatch({
            type: 'toggle',
            payload: {
                id
            }
        });

    const handlerAdd = useCallback(
        (todo) =>
        dispatch({
            type: 'add',
            payload: todo
        }), [dispatch]
    );


    return (
        <>
            <h1>Todo app <small>{todos.length}</small> </h1>
            <hr />

            <Todos todos={todos} handlerDelete={handlerDelete} handlerToggle={handlerToggle} />
            <AddTodo handlerAdd={handlerAdd} />
        </>
    )
}

