import { Vector, VectorProps } from '@phobon/base'

export const Play = ({ width, height, ...props }: VectorProps) => (
  <Vector width={width} height={height} viewBox='0 0 16 16' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M4 5.00133V10.8433C4 11.5912 4.79096 12.0744 5.45641 11.7331L11.1509 8.81209C11.8757 8.44031 11.8757 7.40433 11.1509 7.03255L5.45641 4.11156C4.79096 3.77021 4 4.25343 4 5.00133Z'
      fill='inherit'
    />
  </Vector>
)

Play.defaultProps = {
  width: 16,
  height: 16,
  fill: 'grayscale.2',
}
