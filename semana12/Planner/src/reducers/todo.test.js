import todos from "./todo";
import { setTasks } from "../actions/todo";

describe("Tasks reducer", () => {
  test("case 'SET_TASKS'", () => {
    // Preparação
    const mockTask = [{ text: "Comprar laranja", day: "Terça" }];
    const mockAction = setTasks(mockTask);
    const mockState = { allTasks: [] };

    // Execução
    const newState = todos(mockState, mockAction);

    // Verificação
    expect(newState.allTasks).toHaveLength(1);
    expect(newState.allTasks[0].text).toBe(mockTask[0].text);
    expect(newState.allTasks[0].day).toBe(mockTask[0].day);
  });

  test("Teste do default", () => {
    const mockState = { allTasks: [{ text: "Comprar frutinhas", day: "Quarta"}]}

    const invalidAction = {type: "INVALID_ACTION"}

    const newState = todos(mockState, invalidAction)

    expect(newState).toEqual(mockState)
  })
});
