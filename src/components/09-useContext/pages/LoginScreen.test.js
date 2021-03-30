import { mount } from "enzyme";
import { UserContext } from "../context/UserContext";
import { LoginScreen } from "./LoginScreen";

describe('test login', () => {
    const user = {
        name: 'jorge',
        email: 'jorge@gmail.com'
    }

    const setUser = jest.fn(() => { });

    const wrapper = mount(
        <UserContext.Provider
            value={
                {
                    user,
                    setUser
                }}>
            <LoginScreen />
        </UserContext.Provider>
    );


    test('should snaptshot ', () => {
        expect(wrapper).toMatchSnapshot();
    });


    test('should login ', () => {

        wrapper.find('button').simulate('click');
        expect(setUser).toBeCalled();
        expect(setUser).toBeCalledWith({
            name: 'jorge',
            email: 'jorge@gmail.com'
        });


    });



});