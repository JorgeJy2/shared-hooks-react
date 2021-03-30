import { mount } from "enzyme";
import { UserContext } from "../context/UserContext";
import { AppRouter } from "./AppRouter";

describe('Test router', () => {
    const user = {
        name: 'jorge',
        email: 'jorge@gmail.com'
    }

    const wrapper = mount(

        <UserContext.Provider
            value={
                {
                    user
                }}>
            <AppRouter />
        </UserContext.Provider>);

    test('view', () => {
        expect(wrapper).toMatchSnapshot();
    });
});