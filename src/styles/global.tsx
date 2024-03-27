import { createGlobalStyle, css } from 'styled-components'

const GlobalStyle = createGlobalStyle`
	${() => css`
		:root {
			font-size: 90%;
            --white: #FFF;
            --gray-50: #F7F8FA;
            --gray-100: #E6E8EB;
            --gray-200: #AFB2B1;
            --gray-500: #808080;
            --gray-800: #494D4B;

            --blue: #3399FF;
        }

		


		* {
			margin: 0px;
			padding: 0px;

			box-sizing: border-box;

			font: 400 1em 'Open Sans', sans-serif, 'Roboto';
		}

		html,
		body {
			
			width: 100%;
            background: var(--gray-50);
			min-height: 100vh;
			font-size: 1.6rem;
		}

	
	`};
`

export default GlobalStyle
