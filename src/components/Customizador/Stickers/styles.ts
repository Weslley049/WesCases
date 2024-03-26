
import {styled} from 'styled-components'
import {Dialog as BaseDialog, DialogTitle, DialogContent} from '@mui/material'


export const Dialog = styled(BaseDialog).attrs({

})``; 



export const DialogHeader = styled(DialogTitle)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--blue);
    opacity: 1;
`

export const DialogBody = styled(DialogContent)`    
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 30px;
    max-width: 60vw;  

`;

