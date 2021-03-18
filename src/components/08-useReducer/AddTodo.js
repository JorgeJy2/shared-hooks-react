import React from 'react'
import { useForm } from '../02-useEffect/hooks/useForm';
import PropTypes from 'prop-types';

export const AddTodo = React.memo(({ handlerAdd }) => {
    console.log('CREATE ADD TODO :( ');
    const [{ description }, handlerInputChange, resetForm] = useForm({
        description: ''
    });

    const handlearSubtmit = ($event) => {
        $event.preventDefault();
        if (description.trim().length > 0) {
            handlerAdd({
                id: new Date().getTime(),
                describe: description,
                done: false
            });
            resetForm();
        }
    };

    return (
        <form className="form-add" onSubmit={handlearSubtmit}>
            <p>Add todo</p>
            <hr />
            <input
                className="form-control"
                type="text"
                placeholder="Todo description"
                name="description"
                value={description}
                onChange={handlerInputChange}
            />
            <button
                className="btn btn-primary mt-5"
                type="submit">
                Add todo
                </button>
        </form>
    )
}
)


AddTodo.propTypes = {
    handlerAdd: PropTypes.func.isRequired
};