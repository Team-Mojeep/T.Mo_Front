import styled from "styled-components";
import { MainColor } from "../../styles";

export const Background = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background: ${MainColor};
  gap: 100px;
  > img {
    width: 25%;
    height: 70%;
    margin: 110px;
    @media screen and (max-width: 1500px) {
      display: none;
    }
  }
`;
export const Text = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 70px;
  color: white;
  font-weight: 800;
  width: 610px;
  margin: 8%;
  >a{
    text-decoration: none;
  }
  @media screen and (max-width: 850px) {
    font-size: 64px;
  }
  @media screen and (max-width: 670px) {
    font-size: 50px;
    margin: 6%;
  }
`;
export const SmallText = styled.span`
  font-size: 50px;
  @media screen and (max-width: 670px) {
    font-size: 37px;
  }
`;
export const GoLogin = styled.button`
  font-weight: 600;
  font-size: 40px;
  color: white;
  background: none;
  border: none;
  display: flex;
  align-items: center;
  gap: 15px;
  margin-top: 82px;
  width: 400px;
  @media screen and (max-width: 670px) {
    font-size: 37px;
  }
`;
