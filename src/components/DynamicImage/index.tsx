import { CSSProperties } from 'react'
import styled from 'styled-components'

const Container = styled.div`
	position: relative;
`

interface DynamicImagesProps {
	srcPath: string
	alt: string
	width?: string | number
	height?: string | number
	style?: CSSProperties
	imageStyle?: CSSProperties
}

export function DynamicImage({
	srcPath,
	alt,
	width,
	height,
	style,
	imageStyle
}: DynamicImagesProps) {
	return (
		<Container
			style={{
				width: width || '100%',
				height: height || '100%',
				...style
			}}>
			<img
				src={srcPath}
				alt={alt}
				style={imageStyle}
				draggable={false}
			/>
		</Container>
	)
}
