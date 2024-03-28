import {styled} from 'styled-components'
import {Dialog as BaseDialog, DialogTitle} from '@mui/material'


export const Main = styled.div`
    width: 100%;
    height: 100%;
`;

export const Dialog = styled(BaseDialog).attrs({

})``; 


export const DialogHeader = styled(DialogTitle)`
    border-bottom: 1px solid var(--gray-500);
    display: flex;
    background-color: var(--blue);
    align-items: center;
    justify-content: space-between;
`

export const DialogContent = styled.div`    
    display: flex;
    width: 100%;
    height: 100%;

`;

export const DialogSideBar = styled.div`
    display: flex;
    flex-direction: column;
`;

export const DialogMain = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    height: 100%;
    width: 100%;

`

export const MockupContainer = styled.div`
    height: 54%;
    width: 17.8%;
    border-radius: 10%;
    z-index: 2;
    overflow: hidden;
    background-color: var(--gray-200);
    
    @media (max-width: 430px) {
          position: absolute;
          top: 13.5%;  
          left: 31.5%;
          height: 62.5%;
          width: 39.5%;
    }
    
`;



export const MockupImg = styled.img`
    height: 60%;
    width: 40%;
    position: absolute;
    top: 20%;
    left: 29.5%;
    z-index: 3;
    pointer-events: none; 

    @media (max-width: 430px) {
        height: 70%;
        width: 90%;
        top: 10%;
        left: 5%;
    }

`;

export const MockupCamera = styled.img`
    height: 13%;
    width: 13%;
    position: absolute;
    top: 26%;
    left: 41.3%;
    z-index: 3;
    pointer-events: none; 

    @media (max-width: 430px) {
        height: 70%;
        width: 90%;
        top: 10%;
        left: 5%;
    }

`;

