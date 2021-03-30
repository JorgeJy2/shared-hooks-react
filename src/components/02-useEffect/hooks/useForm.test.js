import { renderHook, act } from "@testing-library/react-hooks";
import { useForm } from "./useForm";


describe('test use form', () => {

    const initialForm = {
        name: 'jorge',
        email: 'jorge@gmail.com'
    }

    test('struct hook', () => {
        const { result } = renderHook(() => useForm(initialForm));

        expect(typeof result.current[0]).toBe('object');
        expect(typeof result.current[1]).toBe('function');
        expect(typeof result.current[2]).toBe('function');
        expect(result.current[0]).toEqual(initialForm);
    });

    test('change value form', () => {
        const { result } = renderHook(() => useForm(initialForm));
        const [, handlerInputChange] = result.current;

        act(() => {
            handlerInputChange(
                {
                    target: {
                        name: 'name',
                        value: 'jacobo'
                    }
                }
            );
        });
        const [formValues] = result.current;
        expect(formValues).toEqual({ ...initialForm, name: 'jacobo' });

    });

    test('reset value form', () => {
        const { result } = renderHook(() => useForm(initialForm));
        const [, handlerInputChange, reset] = result.current;

        act(() => {
            handlerInputChange(
                {
                    target: {
                        name: 'name',
                        value: 'jacobo'
                    }
                }
            );
            reset();
        });

        const [formValues] = result.current;
        expect(formValues).toEqual(initialForm);
    });
});