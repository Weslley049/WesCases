import styled from 'styled-components';


export const Main = styled.div`
    background-color: var(--blue);
    height: 6.5rem;

    display: flex;
    align-items: center;

    padding: 2rem 4rem;

    border-bottom: 1px solid var(--gray-100);

    @media (max-width: 430px) {
        justify-content: center;
    }
`;

export const content = styled.p`
    margin-left: 2rem;
    color: var(--white);
    padding: 0.25rem 0 0.25rem 2rem;
    border-left: 1px solid var(--gray-100);

    @media (max-width: 430px) {
        display: none;
    }
   
`



