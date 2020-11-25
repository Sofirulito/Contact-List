import styled from 'styled-components'

const CardList = styled.div`
    column-count: 4;
    column-gap: 20px;
    padding: 2vw;
    
    @media (max-width: 768px) {
        column-count: 1;
    }
`

const Card = styled.div`
    margin-bottom:20px;
    border-radius: 10px;
    border: 1px solid #eee;
    box-shadow: 0 2px 2px #ccc;
    padding: 1rem;
    background: #FFF;
    min-height: 240px; 

    @media (max-width: 768px) {
        width: 100%;
    }
`

export {
    CardList,
    Card
}