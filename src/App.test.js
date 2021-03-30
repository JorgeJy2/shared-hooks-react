import { shallow } from "enzyme";
import App from "./App";

describe('app test',()=>{

  test('should wrapper', () => {
      const wrapper = shallow(<App/>);
      expect(wrapper).toMatchSnapshot();
  });
  
});
