export function Reducer(state = {
    tasks: [
        { id: 1, name: "Task1", active: true },
        { id: 2, name: "Task2", active: false }
    ]
}, action) {
    switch (action.type) {
        case "ADD_TASK":
            var arr = [...state.tasks]
            arr.push({
                id: state.tasks.length + 1,
                name: action.payload,
                active: false
            })
            state = {
                ...state,
                tasks: arr
            }
            break
        case "setCheckbox":
            var arr = state.tasks.map((item, index) => {
                if (item.id === action.id) {
                    var item = { ...item, active: !item.active }
                }
                return item
            })
            state = { tasks: arr }
            break
        case "setDeleteTask":
            var arr = state.tasks
            var res = arr.splice(action.id, 1)
            state = {
                ...state, tasks: res
            }
    }
    return state
}