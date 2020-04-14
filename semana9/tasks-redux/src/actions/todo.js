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

export const riscaTodo = (id) => {
    return {
        type: "MARCA_TODO",
        payload: {
            id: id
        }
    }
}