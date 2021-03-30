import {
    shallow
} from 'enzyme';
import React from 'react';
import {
    useCounter
} from '../01-useState/hooks/useCounter';
import {
    useFetch
} from './hooks/useFetch';
import {
    MultipleCustomHooks
} from './MultipleCustomHooks';

jest.mock('./hooks/useFetch');
jest.mock('../01-useState/hooks/useCounter');


describe('test MultipleCustomHooks ', () => {

    test('wrapper ', () => {

        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null
        });

        useCounter.mockReturnValue({
            state: 1,
            increment: () => {},
            decrement: () => {},
            reset: () => {}
        });

        const wraper = shallow( < MultipleCustomHooks / > );
        expect(wraper).toMatchSnapshot();
    });

    test('should loading', () => {
        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null
        });
        useCounter.mockReturnValue({
            state: 1,
            increment: () => {},
            decrement: () => {},
            reset: () => {}
        });

        const wraper = shallow( < MultipleCustomHooks / > );
        const loading = wraper.find('#loading');
        expect(loading).not.toBeNull();
        expect(loading.text()).toEqual('Loading . . .');
    });

    test('should show info', () => {

        useFetch.mockReturnValue({
            data: [{
                author: 'Jorge',
                quote: 'Hola mundo'
            }],
            loading: false,
            error: null
        });

        useCounter.mockReturnValue({
            state: 1,
            increment: () => {},
            decrement: () => {},
            reset: () => {}
        });

        const wraper = shallow( < MultipleCustomHooks / > );

        expect(wraper.find('#loading').exists()).toBeFalsy();
        expect(wraper.find('h3').text()).toBe('Hola mundo');
        expect(wraper.find('footer').text()).toBe('Jorge');

    })

});