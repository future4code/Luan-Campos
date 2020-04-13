function RemoveTask (taskId) {
    return {
        type: 'REMOVE_TASK',
        payload: {
            taskId: taskId
        }
    }
}