import { INCREMENT, DECREMENT, RESET } from './../types';

const initialCount = {
    count: 0
}

export default function rootReducer(state = initialCount, action) {
    switch (action.type) {
        case INCREMENT:
            return { count: state.count + 1 }
        case DECREMENT:
            return { count: state.count - 1 }
        case RESET:
            return initialCount
        default:
            return state
    }
};