import styled from 'styled-components'


export const Body = styled.body`
    display: flex;
    flex-direction:  column;
    padding: 3rem;
    height: 20vh;
    text-align: center;
`;


export const CasesList = styled.div`
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-gap: 10px;
    
    @media (max-width: 1024px) {
        grid-template-columns: repeat(2,1fr);
    }

    @media (max-width: 430px) {
        grid-template-columns: repeat(1,1fr);
    }

    background-color: var(--white);
`;

export const CaseBox = styled.div`
    
    width: 100%;
`;
