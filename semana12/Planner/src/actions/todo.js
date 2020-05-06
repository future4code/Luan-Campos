import axios from "axios";

export const setTasks = (task) => {
  return {
    type: "SET_TASKS",
    payload: {
      task,
    },
  };
};

export const getTasks = () => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://us-central1-missao-newton.cloudfunctions.net/generic/planner-hamilton-luan`
    );
    dispatch(setTasks(response.data));
  } catch (err) {
    console.error(err);
  }
};

export const createTask = (text, day) => async (dispatch) => {
  const body = {
    text,
    day,
  };

  try {
    await axios.post(
      `https://us-central1-missao-newton.cloudfunctions.net/generic/planner-hamilton-luan`,
      body
    );
    console.log("Vai caralho", text, day)
    dispatch(getTasks());
  } catch (err) {
    console.error(err);
  }
};
