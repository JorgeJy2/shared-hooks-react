import React from 'react';
import { shallow } from 'enzyme';
import { AddTodo } from './AddTodo';

describe('Test in <TodoAdd />', () => {

    const handleAddTodo = jest.fn();

    const wrapper = shallow(
        <AddTodo handlerAdd={handleAddTodo}
        />
    )


    test('should snapshot', () => {

        expect(wrapper).toMatchSnapshot();

    });

    test('should no call fun  handleAddTodo', () => {

        const formSubmit = wrapper.find('form').prop('onSubmit');

        formSubmit({ preventDefault() { } });

        expect(handleAddTodo).toHaveBeenCalledTimes(0);


    });

    test('should call fun handleAddTodo', () => {

        const value = 'Aprender Firestore';
        wrapper.find('input').simulate('change', {
            target: {
                value,
                name: 'description'
            }
        });

        const formSubmit = wrapper.find('form').prop('onSubmit');
        formSubmit({ preventDefault() { } });

        expect(handleAddTodo).toHaveBeenCalledTimes(1);
        expect(handleAddTodo).toHaveBeenCalledWith(expect.any(Object)); // { }
        expect(handleAddTodo).toHaveBeenCalledWith({
            id: expect.any(Number),
            describe: value,
            done: false
        });
        expect(wrapper.find('input').prop('value')).toBe('');
    });
})