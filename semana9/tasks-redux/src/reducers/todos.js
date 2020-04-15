const initialState = {
  taskList: [],
  filter: "todas",
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case "SET_TASKS": {
      // const newTaskList = [...state.taskList, action.payload.tasks];
      return { ...state, taskList: action.payload.tasks };
    }

    case "COMPLETE_ALL_TODO": {
      const newTaskList = state.taskList.map((todo) => {
        return {
          ...todo,
          done: true,
        };
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
