import { shallow } from "enzyme";
import { Todos } from "./Todos";

const todos = [{
    id: 1,
    describe: 'Learn react',
    done: false
}, {
    id: 2,
    describe: 'Learn python',
    done: false
}];

describe('', ()=>{
    const wrapper = shallow(<Todos todos={todos} handlerToggle={()=>{}} handlerDelete={()=>{}} />);
    test('should snapshot', () => {
        
        expect(wrapper).toMatchSnapshot();
    });
    test('should snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });
    
    test('should have two elements', () => {
        const todosHtml = wrapper.find('Todo');
        expect(todosHtml.length).toBe(todos.length);
    });

    test('should props', ()=>{
        const todoHtml = wrapper.find('Todo').at(0);
        expect(todoHtml.prop('handlerDelete')).toEqual(expect.any(Function));
        expect(todoHtml.prop('handlerToggle')).toEqual(expect.any(Function));
        expect(todoHtml.prop('index')).toBe(0);
        expect(todoHtml.prop('todo')).toEqual(todos[0]);
    })
    
});