import React from "react"
import styled from "styled-components"

const Base = styled.div`
  perspective: 600px;
`
const CardContainer = styled.div`
  height: 240px;
  width: 208px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 12% 15% 30% 12% 15% 15%;
  background-color: #f7f9fc;
  border-radius: 10%;
  perspective: 800px;
  transform-style: preserve-3d;
  transform: rotateY(-10deg);

  -webkit-animation: action 1s infinite alternate;
  animation: action 1s infinite alternate;

  @-webkit-keyframes action {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(0px);
    }
  }
  @keyframes action {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-10px);
    }
  }
`

const Top = styled.div`
  grid-column: 1 / span 2;
  grid-row: 1 / 5;
  background: linear-gradient(#96d1f9, #00cded);
  border-radius: 10% 10% 0 0;
`
const Bottom = styled.div`
  grid-column: 1 / span 2;
  grid-row: 5 / 7;
`

const Circle = styled.div`
  border-radius: 50px;
  height: 60px;
  width: 60px;
  background: white;
  grid-column: 2;
  grid-row: 4 / 6;
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.08);
  justify-self: center;
  margin-top: 8px;
`

const BottomField = styled.div`
  background-color: #dee1e5;
  border-radius: 8px;
  justify-self: center;
  align-self: flex-end;
  grid-column: 1;
  grid-row: 5 / 6;
  height: 40%;
  width: 75%;
`

const BoxContainer1 = styled.div`
  display: inline-flex;
  justify-content: flex-start;
  align-items: flex-end;
  padding: 0 10px 0 10px;
  align-items: center;
  grid-column: 1 / 3;
  grid-row: 1;
`

const TopBox1 = styled.div`
  background-color: #c2e7fb;
  border-radius: 8px;
  height: 40%;
  width: 40%;
`

const TopBox2 = styled.div`
  background-color: #c2e7fb;
  border-radius: 8px;
  margin-left: 10px;
  height: 40%;
  width: 20%;
`

const BoxContainer2 = styled.div`
  display: inline-flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0 10px 0 10px;
  grid-column: 1 / 3;
  grid-row: 2;
`

const TopBox3 = styled.div`
  background-color: #d3f1fc;
  border-radius: 8px;
  justify-self: flex-start;
  align-self: flex-end;
  grid-column: 1;
  grid-row: 2;
  height: 80%;
  width: 22%;
`
const TopBox4 = styled.div`
  background-color: #d3f1fc;
  border-radius: 8px;
  justify-self: flex-start;
  align-self: flex-end;
  margin-left: 10px;
  grid-column: 2;
  grid-row: 2;
  height: 80%;
  width: 60%;
`
const CoolCard = props => (
  <Base>
    <CardContainer>
      <Top />
      <BoxContainer1>
        <TopBox1 />
        <TopBox2 />
      </BoxContainer1>
      <BoxContainer2>
        <TopBox3 />
        <TopBox4 />
      </BoxContainer2>
      <Bottom />
      <Circle />
      <BottomField />
    </CardContainer>
  </Base>
)

export default CoolCard
