import React from "react";
import { shallow } from "enzyme";
import { Planner } from "./";

describe("Planner", () => {
  test("Checar se o getTask está sendo chamado", () => {
    const mockGetTasks = jest.fn();

    const renderedComponent = shallow(<Planner getTasks={mockGetTasks} />);
    renderedComponent.instance().componentDidMount();

    expect(mockGetTasks).toHaveBeenCalled();
  });

  test("Checar o onChange do input", () => {
    const mockGetTasks = jest.fn();
    const event = {
      target: { value: "Comprar pão" },
    };

    const component = shallow(<Planner getTasks={mockGetTasks} />);

    component.find("input").simulate("change", event);
    expect(component.state().inputValue).toBe(event.target.value);
  });

  test("Checar o onChange do select", () => {
    const mockGetTasks = jest.fn();
    const event = {
      target: { value: "Terça" },
    };

    const component = shallow(<Planner getTasks={mockGetTasks} />);

    component.find("select").simulate("change", event);
    expect(component.state().day).toBe(event.target.value);
  });

  test("Checar se o form está sendo chamado", () => {
    const mockGetTasks = jest.fn();
    const mockCreateTask = jest.fn();

    const event = {
      preventDefault() {},
    };

    const component = shallow(
      <Planner getTasks={mockGetTasks} createTask={mockCreateTask} />
    );

    component.find("form").simulate("submit", event);
    expect(mockCreateTask).toHaveBeenCalled();
  });

  test("Verifica se map está funcionando", () => {
    const mockGetTasks = jest.fn();
    const mockAllTasks = [
      { 
        day: "Segunda",
        text: "Fazer bolo",
      },
    ];

    const component = shallow(
      <Planner getTasks={mockGetTasks} allTasks={mockAllTasks} />
    );

    expect(component.find("li")).toHaveLength(1)
    expect(component.find("li").contains(mockAllTasks[0].text)).toEqual(true)
  });
});
