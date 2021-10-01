import styled from "styled-components";


export const Container = styled.div`
  background-color: #a2b0b3;
  padding: 0 15px;
`

export const Content = styled.div`
  height: 84px;
  width: 100%;
  padding: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  nav {
    display: flex;
    align-items: center;

    img {
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #ffffff;
    }

    a {
      text-decoration: none;
      font-weight: bold;
      color: #fff;
    }
  }
`
