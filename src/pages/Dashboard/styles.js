import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`

export const Content = styled.div`
  display:  flex;
  margin: 15px 0 0 15px;
  flex-direction: column;
  width: 1000%;
  max-width: 1200px;

  h1 {
    color: #FFF;
    align-self: center;
  }
`

export const FormStyles = styled.div`
  margin-top: 15px;
  margin-bottom: 30px;
  background: #787276;
  padding: 10px;
  border-radius: 4px;

  form {
    background: #e7e9ea;
    border: 2px solid #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 0 auto;
    width: 500px;
    padding: 30px 50px;
    border-radius: 4px;
  }

  label {
    color: #002a5c;
    display: block;
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    margin-bottom: 10px;
    margin-top: 5px;
    align-self: center;
  }

  input {
    border: none;
    border-radius: 4px;
    box-sizing: border-box;
    padding: 10px;
    width: 100%;
    caret-color: #7ac142;
  }

  button {
    background-color: #2d5980;
    padding: 10px;
    border: none;
    color: #fff;
    font-family: 'Roboto', sans-serif;
    font-size: 13px;
    margin: 20px 0px;
  }

  span {
    color: #FFF200;
    font-size: 13px;
    padding: 8px;
  }
`
