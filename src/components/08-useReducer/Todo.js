import React from 'react'
import PropTypes from 'prop-types';

export const Todo = ({ todo, index, handlerToggle, handlerDelete }) => {
    return (
        <li
            key={todo.id}
            className="list-group-item">
            <p className={`${todo.done && 'complete'}  `}
                onClick={() => { handlerToggle(todo.id) }}> {index + 1}. {todo.describe}
            </p>
            <button className="btn btn-outline-danger"
                onClick={() => { handlerDelete(todo.id) }} >
                x
        </button>
        </li>
    )
}

Todo.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    handlerToggle: PropTypes.func.isRequired,
    handlerDelete: PropTypes.func.isRequired,
};