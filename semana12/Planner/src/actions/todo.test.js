import { setTasks, getTasks } from "./todo";
import axios from "axios";

describe("Actions", () => {
  test("setTasks", () => {
    // Preparação
    const mockTask = [{ text: "Comprar frutas", day: "Segunda" }];

    // Execução
    const action = setTasks(mockTask);

    // Verificação
    expect(action.type).toBe("SET_TASKS");
    expect(action.payload.task).toBe(mockTask);
  });

  test("getTasks", async () => {
    // Preparação
    axios.get = jest.fn(async () => {
      return {
        data: [
          {
            text: "Comprar frutitas",
            day: "Terça",
          },
        ],
      };
    });
    const dispatch = jest.fn();

    // Execução
    await getTasks()(dispatch);

    // Verificação
    expect(dispatch).toHaveBeenCalledWith({
      type: "SET_TASKS",
      payload: {
        task: [
          {
            text: "Comprar frutitas",
            day: "Terça",
          },
        ],
      },
    });
  });
});
