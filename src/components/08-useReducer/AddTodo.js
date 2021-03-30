import React from 'react'
import { useForm } from '../02-useEffect/hooks/useForm';
import PropTypes from 'prop-types';

// React.memo(
export const AddTodo = ({ handlerAdd }) => {
    const [ { description }, handleInputChange, reset ] = useForm({
        description: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if ( description.trim().length <= 1 ) {
            return;
        }
        handlerAdd( {
            id: new Date().getTime(),
            describe: description,
            done: false
        } );
        reset();
        
    }

    return (
        <form className="form-add" onSubmit={handleSubmit}>
            <p>Add todo</p>
            <hr />
            <input
                className="form-control"
                type="text"
                placeholder="Todo description"
                name="description"
                value={description}
                onChange={handleInputChange}
            />
            <button
                className="btn btn-primary mt-5"
                type="submit">
                Add todo
                </button>
        </form>
    )
}


AddTodo.propTypes = {
    handlerAdd: PropTypes.func.isRequired
};