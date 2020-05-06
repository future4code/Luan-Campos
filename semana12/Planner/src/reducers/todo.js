const todos = (state = [], action) => {
  switch (action.type) {
    case "SET_TASKS": {
      return { ...state, allTasks: action.payload.task };
    }
    default:
      return state;
  }
};

export default todos;
