import { Vector, VectorProps } from '~primitives/vector'

export const Stop = ({ width, height, ...props }: VectorProps) => (
  <Vector width={width} height={height} viewBox='0 0 16 16' {...props}>
    <rect x='4' y='4' width='8' height='8' rx='1' fill='inherit' />
  </Vector>
)

Stop.defaultProps = {
  width: 16,
  height: 16,
  fill: 'grayscale.2',
}
