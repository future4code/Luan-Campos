const initialState = {
  taskList: [
    {
      id: 1,
      task: "Tarefa 1 - Redux",
      completa: false,
    },
    {
      id: 2,
      task: "Tarefa 2 - Redux",
      completa: false,
    },
  ],

  filter: "todas"
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case "CRIA_TODO": {
      const newTaskList = [...state.taskList, action.payload];
      return { ...state, taskList: newTaskList };
    }

    case "TOGGLE_TODO": {
      const newTaskList = state.taskList.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            completa: !todo.completa,
          };
        }
        return todo;
      });
      return { ...state, taskList: newTaskList };
    }

    case "DELETA_TODO": {
      const newTaskList = state.taskList.filter((todo) => {
        if (todo.id === action.payload.id) {
          return false;
        }
        return true;
      });
      return { ...state, taskList: newTaskList };
    }

    case "COMPLETE_ALL_TODO": {
      const newTaskList = state.taskList.map((todo) => {
        return {
          ...todo,
          completa: true,
        };
      });
      return { ...state, taskList: newTaskList };
    }

    case "DELETE_ALL_COMPLETE": {
      const newTaskList = state.taskList.filter((todo) => {
        if (todo.completa) {
          return false;
        }
        return true;
      });
      return { ...state, taskList: newTaskList };
    }

    case "SET_FILTER": {
        return { ...state, filter: action.payload.filter };
    }
    default:
      return state;
  }
};

export default todos;
