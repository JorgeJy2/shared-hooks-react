import { mount, shallow } from "enzyme";
import { act } from "react-dom/test-utils";
import { TodoApp } from "./TodoApp";

const todos = [{
    id: 1,
    describe: 'Learn react',
    done: false
}, {
    id: 2,
    describe: 'Learn python',
    done: false
}];

describe('todo app test', () => {
    Storage.prototype.setItem = jest.fn(() => { });
    const wrapper = shallow(<TodoApp />);

    test('should snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should add', () => {
        const wrapper = mount(<TodoApp />);

        act(() => {
            wrapper.find('AddTodo').prop('handlerAdd')(todos[0]);
            wrapper.find('AddTodo').prop('handlerAdd')(todos[1]);
        });

        expect(wrapper.find('h1').text().trim()).toBe('Todo app 2');
        expect(localStorage.setItem).toHaveBeenCalledTimes(2);
    });


    test('should delete', () => {
        const wrapper = mount(<TodoApp />);

        act(() => {
            wrapper.find('AddTodo').prop('handlerAdd')(todos[0]);
        });

        expect(wrapper.find('h1').text().trim()).toBe('Todo app 1');
        act(() => {
            wrapper.find('Todos').prop('handlerDelete')(todos[0].id);
        });

        expect(wrapper.find('h1').text().trim()).toBe('Todo app 0');
    });

});