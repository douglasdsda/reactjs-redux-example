import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 30%;
  margin: 40px auto;
  align-items: center;
  color: #403f44;
  border-radius: 8px;
  flex-shrink: 0;
  border: 1px solid #f7eaf4;
  border-radius: 8px;
  cursor: pointer;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0 10px;
    strong {
      margin-right: 20px;
      color: #e12057;
    }
    h1 {
      flex-shrink: 0;
    }
  }

  img {
    width: 250px;
    height: 250px;
  }

  div:last-child {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
    border-top: 1px solid #e12057;
    width: 100%;
    padding: 5px 10px;

    span {
      font-weight: bold;
      font-size: 15px;
    }
  }

  @media (max-width: 700px) {
    width: 100%;
    padding: 0 30px;
  }
`;
