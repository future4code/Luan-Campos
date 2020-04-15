export const criaTodo = (todo) => {
    return {
        type: "CRIA_TODO",
        payload: {
            id: Date.now(),
            task: todo,
            completa: false
        }
    }
}

export const toggleTodo = (id) => {
    return {
        type: "TOGGLE_TODO",
        payload: {
            id: id
        }
    }
}

export const deletaTodo = (id) => {
    return {
        type: "DELETA_TODO",
        payload: {
            id: id
        }
    }
}

export const completeAllTodo = () => {
    return {
        type: "COMPLETE_ALL_TODO"
    }
}

export const deleteAllComplete = () => {
    return {
        type: "DELETE_ALL_COMPLETE"
    }
}

export const setFilter = (filter) => {
    return {
        type: "SET_FILTER",
        payload: {
            filter: filter
        }
    }
}