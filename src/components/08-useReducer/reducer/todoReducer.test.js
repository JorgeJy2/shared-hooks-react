import {
    todoReducer
} from "./todoReducer";

const todos = [{
    id: 1,
    desc: 'Learn react',
    done: false
}, {
    id: 2,
    desc: 'Learn python',
    done: false
}];

describe('todoReducer', () => {
    test('should default', () => {
        const state = todoReducer(todos, {});
        expect(state).toEqual(todos);
    });

    test('should add', () => {
        const newTodo = {
            id: 3,
            desc: 'Learn flutter'
        }
        const state = todoReducer(todos, {
            type: 'add',
            payload: newTodo
        });
        expect(state).toEqual([...todos, newTodo]);
    });

    test('should delete', () => {
        const state = todoReducer(todos, {
            type: 'delete',
            payload: {
                id: 1
            }
        });
        expect(state).toEqual(todos.filter(todo => todo.id != 1));
    });

    test('should toggle', () => {
        const state = todoReducer(todos, {
            type: 'toggle',
            payload: todos[0]
        });
        expect(state[0].done).toBe(true);
        expect(state).toEqual(todos.map(todo =>
            (1 === todo.id)
                ? { ...todo, done: !todo.done }
                : todo));
    }); 

  


    // test('should default', () => {
    //     const state = todoReducer(todos, {});
    //     expect(state).toEqual(todos);
    // }); 
});