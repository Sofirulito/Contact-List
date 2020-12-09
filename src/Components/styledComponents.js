import styled from 'styled-components'

const Title = styled.h2`
    margin: 0;
    position: relative;
    color: #231F20;
    &:after{
        content: "";
        position: absolute;
        height: 2px;
        width: calc(100% - 150px);
        background: #C1D72F;
        right: 0;
        top: 16px;
    }
`

const CardList = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 1vw 0;
    
    @media (max-width: 768px) {
        column-count: 1;
    }
`

const CardContent = styled.div`
    width: calc((100% / 4) - 20px);
    margin-bottom:20px;
    border: 1px solid #eee;
    box-shadow: 0 2px 4px #ccc;
    padding: 1.5rem 0;
    background: #FFF;
    text-align: center;
    margin: 10px 10px 10px 0;

    @media (max-width: 768px) {
        width: 100%
    }
`

const Avatar = styled.img`
    border-radius: 100%;
    height: 100px;
    width: 100px
`

const Email = styled.p`
`

const Name = styled.p`
`
const ButtonDelete = styled.button`
`
const ButtonAdd = styled.button`
`

export {
    Title,
    CardList,
    CardContent,
    Avatar,
    Name,
    Email,
    ButtonDelete,
    ButtonAdd
}