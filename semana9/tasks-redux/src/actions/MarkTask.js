function MarkTask (taskId) {
    return {
        type: 'MARK_TASK',
        payload: {
            taskId: taskId
        }
    }
}