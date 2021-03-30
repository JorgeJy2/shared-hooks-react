import {
    renderHook
} from "@testing-library/react-hooks";
import {
    useFetch
} from "./useFetch";

describe('use fetch', () => {
    test('should default info', () => {
        const {
            result
        } = renderHook(() => useFetch('https://www.breakingbadapi.com/api/quotes/1'));

        expect(result.current.data).toBe(null);
        expect(result.current.loading).toBe(true);
        expect(result.current.error).toBe(null);
    });

    test('should get gifs', async () => {
        const {
            result,
            waitForNextUpdate
        } = renderHook(() => useFetch('https://www.breakingbadapi.com/api/quotes/1'));

        await waitForNextUpdate({
            timeout: 5000
        });

        const {
            data,
            loading,
            error
        } = result.current;

        expect(data.length).toBe(1);
        expect(loading).toBe(false);
        expect(error).toBeNull();
    });


    test('should manager error', async () => {
        const {
            result,
            waitForNextUpdate
        } = renderHook(() => useFetch('https://reqres.in/apid/users?page=2'));

        await waitForNextUpdate({
            timeout: 5000
        });

        const {
            data,
            loading,
            error
        } = result.current;

        expect(data).toBeNull();
        expect(loading).toBe(false);
        expect(error).not.toBeNull();
    });

});