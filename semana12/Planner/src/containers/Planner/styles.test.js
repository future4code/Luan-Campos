import React from "react";
import renderer from "react-test-renderer";
import { Wrapper, Form, WrapperWeek, dias } from "./styles";

it("Estilização", () => {
  const tree = renderer
    .create(<Wrapper />, <Form />, <WrapperWeek />, dias)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
