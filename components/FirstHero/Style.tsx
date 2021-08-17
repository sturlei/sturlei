import styled from "styled-components";


export const FirstHeroWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 80rem;
    color: white;
    display: grid;
    grid-template-columns: repeat(2,1fr) ;
    align-content: center;
    padding: 10rem;
    grid-auto-rows: minmax(10rem, max-content);
    z-index: 5;
background: linear-gradient(180deg, rgba(17,14,68,1) 0%, rgba(5,13,29,1) 20%, rgba(53,97,87,1) 100%);


    
    & > *{
        display: flex;
        flex-direction: column;
        align-content: center;
        justify-content: center;
        z-index: 10;
    }
    
`;

export const LeftContent = styled.div`


`;

export const RightContent = styled.div`



    
`;