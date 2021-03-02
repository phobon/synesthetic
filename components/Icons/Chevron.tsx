import { Vector, VectorProps } from '~primitives/vector'

export const Chevron = ({ width, height, ...props }: VectorProps) => (
  <Vector width={width} height={height} viewBox='0 0 16 16' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M2.29289 5.29289C1.90237 5.68342 1.90237 6.31658 2.29289 6.70711L7.23924 11.6535C7.24037 11.6546 7.24151 11.6557 7.24265 11.6569C7.63318 12.0474 8.26634 12.0474 8.65687 11.6569L13.6066 6.70714C13.9971 6.31661 13.9971 5.68345 13.6066 5.29292C13.2161 4.9024 12.5829 4.9024 12.1924 5.29292L7.94977 9.53555L3.70711 5.29289C3.31658 4.90237 2.68342 4.90237 2.29289 5.29289Z'
      fill='inherit'
    />
  </Vector>
)

Chevron.defaultProps = {
  width: 16,
  height: 16,
  fill: 'grayscale.2',
}
