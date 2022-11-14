import styled from 'styled-components';
const FormContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: #f9f9f9;
  .brand {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    img {
      height: 5rem;
    }
    h1 {
      // color: #0150bb;
      color: #2f72cb;
      text-transform: uppercase;
    }
  }
    form {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      background-color: #EEEFED;
      border-radius: 2rem;
      padding: 3rem 5rem;
    }
    input{
      background-color: transparent;
      padding: 1rem;
      border: 0.1rem solid #2f72cb;
      color: #2f72cb;
      border-radius: 0.4rem;
      width: 100%;
      font-size: 1rem;
      outline: none;
      &:focus{
        border: 0.1rem solid #80A7DD;
      }
    }
    button{
      background-color: #2f72cb;
      // background-color: #997af0;
      color:white;
      padding: 1rem 2rem;
      border: none;
      font-size: 1rem;
      text-transform: uppercase;
      &:hover{
        background-color: #0150bb
      }
    }
span{
  color:  #2f72cb;
  a{
    color:  #2f72cb;
    text-decoration:none;
    font-weight:bold;
  }
}
  }
`;

export default FormContainer;
