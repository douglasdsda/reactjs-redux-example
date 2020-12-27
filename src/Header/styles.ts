import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  padding: 10px;

  display: flex;
  flex-direction: column;
`;

export const Line = styled.div`
  border-bottom: 1px solid #e12057;
  opacity: 0.2;
  margin-top: 40px;
`;

export const Menu = styled.div`
  height: 100px;
  display: flex;
  justify-content: space-between;
  width: 1200px;
  margin: 0 auto;
  align-items: center;

  img {
    height: 75px;
    width: 75px;
    cursor: pointer;
  }

  > div {
    display: flex;
    align-items: center;

    button {
      margin-left: 20px;
    

      cursor: pointer;

      &:hover {
        border-bottom: 2px solid #e12057;
      }
    }
  }
  @media (max-width: 1300px) {
    width: 100vw;
    padding: 0 30px;
  }
`;
