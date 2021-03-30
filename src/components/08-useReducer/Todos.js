import React from 'react'
import PropTypes from 'prop-types';
import { Todo } from './Todo';

export const Todos = ({ todos, handlerToggle, handlerDelete }) => {
    return (
        <ul className="list-group list-group-flush">
            {
                todos.map((todo, i) => <Todo 
                    key={todo.id}
                    todo={todo}
                    index={i}
                    handlerDelete={handlerDelete}
                    handlerToggle={handlerToggle} />)
            }
        </ul>
    )
}
Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    handlerToggle: PropTypes.func.isRequired,
    handlerDelete: PropTypes.func.isRequired,
};