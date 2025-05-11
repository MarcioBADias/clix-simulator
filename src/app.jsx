import { Board } from './components/Board'
import { useBoardReducer } from './hooks/useBoardReducer'

const App = () => {
  const { state, dispatch } = useBoardReducer()

  const handleAddToken = () => {
    const newToken = {
      id: Date.now(),
      x: 0,
      y: 0,
      image: 'https://via.placeholder.com/36', // pode ser o busto do personagem
    }
    dispatch({ type: 'ADD_TOKEN', payload: newToken })
  }

  return (
    <div>
      <h1 style={{ color: '#dc2626' }}>Clix Simulator</h1>
      <button onClick={handleAddToken}>Adicionar peça</button>
      <Board />
    </div>
  )
}

export { App }
