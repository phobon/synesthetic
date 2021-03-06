import { Vector, VectorProps } from '~primitives/vector'

export const Pause = ({ width, height, ...props }: VectorProps) => (
  <Vector width={width} height={height} viewBox='0 0 16 16' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M5 4C4.44772 4 4 4.44772 4 5V11C4 11.5523 4.44772 12 5 12C5.55228 12 6 11.5523 6 11V5C6 4.44772 5.55228 4 5 4ZM11 4C10.4477 4 10 4.44772 10 5V11C10 11.5523 10.4477 12 11 12C11.5523 12 12 11.5523 12 11V5C12 4.44772 11.5523 4 11 4Z'
      fill='inherit'
    />
  </Vector>
)

Pause.defaultProps = {
  width: 16,
  height: 16,
  fill: 'grayscale.2',
}
