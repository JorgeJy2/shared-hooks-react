import {
    shallow
} from "enzyme";
import {
    RealExampleRef
} from "./RealExampleRef";

describe('real example ref', () => {
    const wrapper = shallow( < RealExampleRef / > );
    test('should shapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should component default MultipleCustomHooks', () => {
        expect(wrapper.find('MultipleCustomHooks').exists()).not.toBeTruthy();
    });

    test('should component MultipleCustomHooks', () => {
        const button = wrapper.find('button');
        button.simulate('click');
        expect(wrapper.find('MultipleCustomHooks').exists()).toBeTruthy();
    });
});