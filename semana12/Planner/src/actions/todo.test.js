import { setTasks, getTasks, createTask } from "./todo";
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
    const mockTask = [{ text: "Comprar frutas", day: "Segunda" }];
    axios.get = jest.fn(async () => {
      return { data: mockTask };
    });
    const dispatch = jest.fn();

    // Execução
    await getTasks()(dispatch);

    // Verificação
    expect(dispatch).toHaveBeenCalledWith({
      type: "SET_TASKS",
      payload: { task: mockTask },
    });
  });

  test("getTasks cai no error", async() => {
    const text = "Olar"
    const day = "segunda"
    const mockError = new Error("Teste de erro")
    
    console.error = jest.fn()
    axios.post = jest.fn (() => {
      throw mockError
    })

    const dispatch = jest.fn()

    await createTask(text, day) (dispatch)
    expect(console.error).toHaveBeenCalledWith(mockError)
  })

  test("createTask", async() => {
    const text = "Funciona pfvr"
    const day = "Segunda"

    axios.post = jest.fn()
    const dispatch = jest.fn()

    await createTask(text, day)(dispatch)

    expect(dispatch).toHaveBeenCalledTimes(1)
  })
});
