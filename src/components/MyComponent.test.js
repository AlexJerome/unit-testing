import React from "react";
import { shallow, mount } from "enzyme";
import MyComponent from "./MyComponent";

describe("Test MyComponent", () => {
  it("should render correctly", () => {
    const component = shallow(<MyComponent />);
    expect(component).toMatchSnapshot();
    component.unmount();
  });

  it("should increment when button +1 pressed", () => {
    const component = mount(<MyComponent />);
    const prevValueOfCount = component.state("count");
    component.find("button#increment").simulate("click");
    expect(component.state("count")).toEqual(prevValueOfCount + 1);
    component.unmount();
  });

  it("should decrement when button -1 pressed", () => {
    const component = mount(<MyComponent />);
    const prevValueOfCount = component.state("count");
    component.find("button#decrement").simulate("click");
    expect(component.state("count")).toEqual(prevValueOfCount - 1);
    component.unmount();
  });
});
