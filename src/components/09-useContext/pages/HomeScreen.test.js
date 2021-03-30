import { mount } from "enzyme";
import { UserContext } from "../context/UserContext";
import { HomeScreen } from "./HomeScreen";

describe('test home screen', () => {
    const user = {
        name: 'jorge',
        email: 'jorge@gmail.com'
    }
    const wrapper = mount(<UserContext.Provider value={
        {
            user,
            setUser: () => { }
        }}>
        <HomeScreen />
    </UserContext.Provider>);
    test('should snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    })

});