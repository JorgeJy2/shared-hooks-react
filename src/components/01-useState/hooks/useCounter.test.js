import { useCounter } from "./useCounter";
import { renderHook, act } from '@testing-library/react-hooks';

describe('test userCounter hook', () => {

    test('should returns hooks', () => {
        const { result } = renderHook(() => useCounter());
        expect(result.current.state).toBe(10);
        expect(typeof result.current.decrement).toBe('function');
        expect(typeof result.current.increment).toBe('function');
        expect(typeof result.current.reset).toBe('function');
    });

    test('should increment default', () => {
        const initCounter = 1;
        const { result } = renderHook(() => useCounter(initCounter));
        const { increment } = result.current;
        act(() => increment());
        const { state } = result.current;
        expect(state).toBe(initCounter + 1);
    });

    test('should increment factor', () => {
        const initCounter = 1;
        const { result } = renderHook(() => useCounter(initCounter));
        const { increment } = result.current;
        act(() => increment(10));
        const { state } = result.current;
        expect(state).toBe(initCounter + 10);
    });

    test('should decrement default', () => {
        const initCounter = 1;
        const { result } = renderHook(() => useCounter(initCounter));
        const { decrement } = result.current;
        act(() => decrement());
        const { state } = result.current;
        expect(state).toBe(initCounter - 1);
    });

    test('should decrement factor', () => {
        const initCounter = 1;
        const { result } = renderHook(() => useCounter(initCounter));
        const { decrement } = result.current;
        act(() => decrement(10));
        const { state } = result.current;
        expect(state).toBe(initCounter - 10);
    });


    test('sould reset', ()=>{
        const initCounter = 102;
        const { result } = renderHook(() => useCounter(initCounter));
        const { increment, reset } = result.current;
        act(() => {
            increment(10);
            reset();
        });
        const { state } = result.current;
        expect(state).toBe(initCounter);
    });

});