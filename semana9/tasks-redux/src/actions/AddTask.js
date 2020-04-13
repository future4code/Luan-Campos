function AddTask (task) {
    return {
        type: 'ADD_TASK',
        payload: {
            newTask: task
        }
    }
}