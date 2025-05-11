import { useReducer } from 'react'

const initialState = {
  tokens: [],
}

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TOKEN':
      return { ...state, tokens: [...state.tokens, action.payload] }
    case 'MOVE_TOKEN':
      return {
        ...state,
        tokens: state.tokens.map((t) =>
          t.id === action.payload.id
            ? { ...t, x: action.payload.x, y: action.payload.y }
            : t,
        ),
      }
    default:
      return state
  }
}

export function useBoardReducer() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return { state, dispatch }
}
