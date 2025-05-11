import { Container, Cell } from './style'
import { Token } from '../Token'
import { useBoardReducer } from '../../hooks/useBoardReducer'
import { useState } from 'react'
const Board = () => {
  const { state, dispatch } = useBoardReducer()
  const [draggingId, setDraggingId] = useState(null)

  const handleDrop = (e, x, y) => {
    e.preventDefault()
    dispatch({ type: 'MOVE_TOKEN', payload: { id: draggingId, x, y } })
    setDraggingId(null)
  }

  const handleDragStart = (id) => setDraggingId(id)

  return (
    <Container>
      {[...Array(16)].map((_, row) =>
        [...Array(16)].map((_, col) => (
          <Cell
            key={`${row}-${col}`}
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => handleDrop(e, col, row)}
          >
            {state.tokens
              .filter((t) => t.x === col && t.y === row)
              .map((token) => (
                <Token
                  key={token.id}
                  token={token}
                  onDragStart={() => handleDragStart(token.id)}
                />
              ))}
          </Cell>
        )),
      )}
    </Container>
  )
}

export { Board }
