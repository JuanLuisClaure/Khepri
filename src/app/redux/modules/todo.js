const UPDATE_ITEMS = 'UPDATE_ITEMS';

export const updateItems = (payload) => ({ type: UPDATE_ITEMS, payload });

let defaultState = {
        'todos': [
            {'name': 'item 1'},
            {'name': 'item 2'},
            {'name': 'item 3'}
        ]};

export function todoReducer (state = defaultState, action) {
    switch (action.type) {

        case UPDATE_ITEMS:
            Object.assign({}, state, {
                todos: action.payload.todos
            })
            return state;

        default:
            return state;
    }
}
