import React from "react";
import { shallow, mount, render } from "enzyme";
import Header from "./Header";

it("expect to render Header component", () => {
  expect(shallow(<Header />)).toMatchSnapshot();
});

it("expect Header to not update", () => {
  const shouldUpdate = shallow(<Header />)
    .instance()
    .shouldComponentUpdate();
  expect(shouldUpdate).toBe(false);
});
