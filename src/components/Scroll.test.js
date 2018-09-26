import React from "react";
import { shallow, mount, render } from "enzyme";
import Scroll from "./Scroll";

it("expect to render Scroll component", () => {
  expect(shallow(<Scroll />)).toMatchSnapshot();
});
