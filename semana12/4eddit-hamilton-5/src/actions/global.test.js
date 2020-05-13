import { setLoading } from "./global";

describe("Action que retorna o loading", () => {
  test("Action - setLoading(TRUE)", () => {
    // Preparação
    const mockLoading = true;

    // Execução
    const action = setLoading(mockLoading);

    // Verificação
    expect(action.type).toBe("SET_LOADING");
    expect(action.payload.loading).toBe(mockLoading);
  });

  test("Action - setLoading(FALSE)", () => {
    // Preparação
    const mockLoading = false;

    // Execução
    const action = setLoading(mockLoading);

    // Verificação
    expect(action.type).toBe("SET_LOADING");
    expect(action.payload.loading).toBe(mockLoading);
  });
});
