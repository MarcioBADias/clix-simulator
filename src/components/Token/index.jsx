import { TokenImage } from './style'

const Token = ({ token, onDragStart }) => {
  return (
    <TokenImage
      src={token.image}
      alt="token"
      draggable
      onDragStart={() => onDragStart(token.id)}
    />
  )
}
export { Token }
