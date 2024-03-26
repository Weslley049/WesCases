import {styled} from 'styled-components'
import {Dialog as BaseDialog, DialogContent} from '@mui/material'


interface ColorBoxInterface {
    color: string;
}

interface FontBoxInterface {
    fontFamily: string;
}


export const Dialog = styled(BaseDialog).attrs({

})`

`;


export const DialogMain= styled(DialogContent).attrs({
    
})`
    display: flex;
    max-width: 60vw; 
    max-height: 20vh; 
 
    gap: 2rem;
    background-color: 'none';
`;


export const DialogBody = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`;

export const DialogSideBar = styled.div`
    display: flex;
    gap: 20px;
    ;
`

export const DialogMainFonts = styled.div`
    display: flex;
    gap: 20px;
`;


export const FontBox = styled.div<FontBoxInterface>`
    display: flex;
    align-items: center;
    height: 4rem;
    width: 4rem;
    
    color: white;
    font-family: ${({fontFamily}) => fontFamily};
    background-color: var(--blue);
    justify-content: center;
    border: 1px solid white;
    border-radius: 10px;
`;

export const ColorBox = styled.div<ColorBoxInterface>`
    height: 30px;
    width: 30px;
    background-color: ${({ color }) =>  color};
`;


