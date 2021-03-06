import { styled } from '~design'

export type VectorProps = React.SVGProps<SVGSVGElement>

const StyledVector = styled('svg', {
  display: 'block',
  fill: '$foreground',
  stroke: 'none',
})

export const Vector = ({ ...props }) => (
  <StyledVector xmlns='http://www.w3.org/2000/svg' {...props} />
)

Vector.displayName = 'Vector'
