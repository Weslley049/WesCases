import {styled} from 'styled-components'
import {Dialog as BaseDialog, DialogContent} from '@mui/material'


interface ColorBoxInterface {
    color: string;
}

interface FontBoxInterface {
    fontFamily: string;
}


export const Dialog = styled(BaseDialog).attrs({

})``;


export const DialogMain= styled(DialogContent).attrs({
    
})`
    display: flex;
    gap: 2rem;
    position: relative; 
    background-color: 'none';
   

   @media (max-width: 430px) {
        flex-direction: column;
    }
`;


export const DialogBody = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
   
    gap: 30px;
`;

export const DialogSideBar = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    overflow-x: auto;
    width: 100%;
    &::-webkit-scrollbar {
    width: 10px;
  }
    @media (max-width: 430px) {
        flex-direction: row;
    }
`

export const DialogMainFonts = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
`;


export const FontBox = styled.div<FontBoxInterface>`
    display: flex;
    align-items: center;
    padding: 10px;
    font-size: 1rem;
    color: white;
    font-family: ${({fontFamily}) => fontFamily};
    background-color: var(--blue);
    justify-content: center;
    border: 1px solid white;
    border-radius: 20px;
`;

export const ColorBox = styled.div<ColorBoxInterface>`
    height: 30px;
    width: 30px;
    border: 1px solid white;
    border-radius: 100%;
    background-color: ${({ color }) =>  color};
`;


