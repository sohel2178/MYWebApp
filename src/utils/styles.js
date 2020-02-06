import styled from "styled-components";

const MyButton = styled.a`
  cursor: pointer;
  padding: 9px 23px;
  display: inline-block;
  font-weight: 500;
  color: #fff;
  background: linear-gradient(-45deg, #b7006e, #ffba00, #fb8b05, #f33216);
  transition: all 0.2s ease-in-out 0s;
  box-shadow: 0 6px 30px -7px rgba(0, 0, 0, 0.62);
  border-radius: 3px;
  margin-top: ${props => (props.marginTop ? props.marginTop : "0px")};

  &:hover {
    box-shadow: none;
  }
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: indigo;
`;

const Indicator = styled.div`
  width: 10px;
  height: 10px;
  background-color: ${props => (props.color ? props.color : "red")};
  border-radius: 50%;
`;

const Line = styled.div`
  margin: 5px 20%;
  width: 60%;
  height: 3px;
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 9, 121, 1) 35%,
    rgba(0, 212, 255, 1) 100%
  );
`;

const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  background-color: #ddd;
  width: 250px;

  padding: 20px;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

const MiniHeader = styled.h3`
  font-size: 17px;
  font-weight: 400 !important;
  text-align: left;
  padding-left: 12px;
`;

export { Title, Indicator, Line, MyButton, Card, MiniHeader };
