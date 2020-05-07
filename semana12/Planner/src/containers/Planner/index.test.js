import React from "react";
import { shallow } from "enzyme";
import { Planner } from "./";
import { createTask } from "../../actions/todo";

describe("Planner", () => {
  test("Checar os componentes", () => {
    const mockGetTasks = jest.fn();
    const mockState = { inputValue: ""}
    const mockEvent = "teste"

    const renderedComponent = shallow(<Planner getTasks={mockGetTasks} />);
    renderedComponent.instance().componentDidMount();

    expect(mockGetTasks).toHaveBeenCalled();
  });
});
