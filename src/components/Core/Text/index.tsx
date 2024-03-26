
import styled, { css } from 'styled-components'

export const fontSize = {
	10: '1.0rem',
	12: '1.2rem',
	14: '1.4rem',
	16: '1.6rem',
	18: '1.8rem',
	20: '2.0rem',
	22: '2.2rem',
	24: '2.4rem',
}

interface Props {
	$bold?: boolean
	$scale?: keyof typeof fontSize
}

const Text = styled.p<Props>`
	${({ $bold, $scale }) => css`
		${$bold && `font-weight: 700;`}
		${$scale && `font-size: ${fontSize[$scale]}`}
	`};
`

export default Text