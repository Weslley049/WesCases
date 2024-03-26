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
    height: 100%;
    width: 100%;
`