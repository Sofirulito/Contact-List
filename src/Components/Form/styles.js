import styled from 'styled-components'

const FormContent = styled.form`
  background-color: #c1d72f;
  max-width: 20%;
  margin: 0 auto;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

const InputForm = styled.input`
  width: 90%;
  margin: 10px 0;
  display: block;
  background-color: rgb(255 255 255 / 50%);
  padding: 1rem;
  border: none;
  border-bottom: 1px solid #FFF;
  color: #585e32;
`;


const InputButton = styled.button`
  display: block;
  background-color: #FFF;
  padding: 0.3rem 0.6rem;
  margin: 15px auto 0;
  border: 0;
  border-radius: 5px;
  color: #585e32;
`;

export {
    FormContent,
    InputForm,
    InputButton
}