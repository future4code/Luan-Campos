const initialState = {
    taskList: [],
}

const todos = (state = initialState, action) => {
    switch(action.type) {
        case "CRIA_TODO" :
            const newTaskList = [...state.taskList, action.payload]
            return {...state, taskList: newTaskList}
        default:
            return state
    }
}

export default todos