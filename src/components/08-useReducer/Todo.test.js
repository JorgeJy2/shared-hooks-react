import { shallow } from "enzyme";
import { Todo } from "./Todo";

const todos = [{
    id: 1,
    describe: 'Learn react',
    done: false
}, {
    id: 2,
    describe: 'Learn python',
    done: false
}];

describe('',() => {
    const handlerDelete = jest.fn(id => {});
    const handlerToggle = jest.fn(id => {});
    
    const wrapper = shallow(<Todo todo={todos[0]} index={1} handlerToggle={handlerToggle} handlerDelete={handlerDelete}/>);
    test('should snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should describe', () => {
        const describe = wrapper.find('p').text();
        expect(describe.includes(todos[0].describe)).toBeTruthy();
    });

    test('should delete', () => {
        wrapper.find('button').simulate('click');
        expect(handlerDelete).toBeCalledWith(todos[0].id);
    });

    test('should toggle', () => {
        wrapper.find('p').simulate('click');
        expect(handlerToggle).toBeCalledWith(todos[0].id);
    });

    test('should be class complete', () => {
        const todo = todos[0];
        todo.done = true;
        const wrapper = shallow(<Todo todo={todo} index={1} handlerToggle={handlerToggle} handlerDelete={handlerDelete}/>);
        expect(wrapper.find('p').hasClass('complete')).toBeTruthy();
    });
    
});