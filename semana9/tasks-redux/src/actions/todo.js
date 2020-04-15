import axios from "axios";

export const completeAllTodo = () => {
  return {
    type: "COMPLETE_ALL_TODO",
  };
};

export const setFilter = (filter) => {
  return {
    type: "SET_FILTER",
    payload: {
      filter: filter,
    },
  };
};

// sync

export const setTasks = (tasks) => {
  return {
    type: "SET_TASKS",
    payload: {
      tasks: tasks,
    },
  };
};

// async

export const fetchTasks = () => async (dispatch, getState) => {
  const response = await axios.get(
    "https://us-central1-missao-newton.cloudfunctions.net/reduxTodo/luan/todos"
  );

  dispatch(setTasks(response.data.todos));
  console.log(response.data.todos);
};

export const createTask = (task) => async (dispatch, getState) => {
  const body = {
    text: task,
  };
  const response = await axios.post(
    "https://us-central1-missao-newton.cloudfunctions.net/reduxTodo/luan/todos",
    body
  );

  dispatch(fetchTasks());
};

export const toggleTask = (id) => async (dispatch, getState) => {
  const response = await axios.put(
    `https://us-central1-missao-newton.cloudfunctions.net/reduxTodo/luan/todos/${id}/toggle`
  );

  dispatch(fetchTasks());
};

export const deleteTask = (id) => async (dispatch, getState) => {
  const response = await axios.delete(
    `https://us-central1-missao-newton.cloudfunctions.net/reduxTodo/luan/todos/${id}`
  );

  dispatch(fetchTasks());
};

export const completeAllTasks = (id) => async (dispatch, getState) => {
    const response = await axios.put(
      `https://us-central1-missao-newton.cloudfunctions.net/reduxTodo/luan/todos/${id}/toggle`
    );
  
    dispatch(fetchTasks());
  };

export const deleteAllDone = () => async (dispatch, getState) => {
    const response = await axios.delete(
      `https://us-central1-missao-newton.cloudfunctions.net/reduxTodo/luan/todos/delete-done`
    );
  
    dispatch(fetchTasks());
  };
